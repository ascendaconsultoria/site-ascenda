# Integração do formulário com Google Sheets

O formulário do site envia os dados para `/api/submit-form`. Essa rota valida nome, WhatsApp, cargo, empresa, e-mail, estado e cidade, depois encaminha o lead para um Web App do Google Apps Script.

Planilha solicitada:

`https://docs.google.com/spreadsheets/d/1i42epyxbUDMy0sTHwVxRwAbN86H0Uwsf3LmRGnE7mvs/edit?usp=sharing`

## 1. Preparar as colunas da planilha

Use esta ordem de colunas na primeira linha da aba que receberá os leads:

1. Data/Hora
2. Nome completo
3. Contato/WhatsApp
4. Cargo
5. Empresa
6. E-mail profissional
7. Estado
8. Cidade
9. Origem

> Se a aba tiver outro nome, altere a constante `SHEET_NAME` no código abaixo.

## 2. Criar o Apps Script

Na planilha, vá em **Extensões > Apps Script** e cole este código:

```javascript
const SPREADSHEET_ID = "1i42epyxbUDMy0sTHwVxRwAbN86H0Uwsf3LmRGnE7mvs";
const SHEET_NAME = "Página1";

// Opcional, mas recomendado. Use o mesmo valor da variável GOOGLE_SHEETS_WEBHOOK_SECRET.
const WEBHOOK_SECRET = "troque-por-uma-chave-grande-e-aleatoria";

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const payload = JSON.parse(e.postData.contents || "{}");

    if (WEBHOOK_SECRET && payload.secret !== WEBHOOK_SECRET) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: "Unauthorized" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.getSheets()[0];

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Data/Hora",
        "Nome completo",
        "Contato/WhatsApp",
        "Cargo",
        "Empresa",
        "E-mail profissional",
        "Estado",
        "Cidade",
        "Origem"
      ]);
    }

    sheet.appendRow([
      payload.submittedAt ? new Date(payload.submittedAt) : new Date(),
      payload.nome || "",
      payload.whatsapp || "",
      payload.cargo || "",
      payload.empresa || "",
      payload.email || "",
      payload.estado || "",
      payload.cidade || "",
      payload.origem || "Site Ascenda"
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

## 3. Implantar como Web App

1. Clique em **Implantar > Nova implantação**.
2. Tipo: **Aplicativo da Web**.
3. Executar como: **Eu**.
4. Quem pode acessar: **Qualquer pessoa**.
5. Clique em **Implantar**.
6. Copie a URL gerada.

## 4. Configurar no projeto local

Crie um arquivo `.env.local` na raiz do projeto:

```bash
NEXT_PUBLIC_SITE_URL="https://consultoriaascenda.com"
GOOGLE_SHEETS_WEBHOOK_URL="COLE_A_URL_DO_WEB_APP_AQUI"
GOOGLE_SHEETS_WEBHOOK_SECRET="a-mesma-chave-usada-no-apps-script"
```

Depois rode o site localmente e envie um teste pelo formulário.

## 5. Configurar na Vercel

Na Vercel, acesse:

**Project Settings > Environment Variables**

Adicione as mesmas variáveis para **Production** e, se quiser testar antes, também para **Preview**.

Depois faça um novo deploy, porque alterações em variáveis de ambiente só passam a valer nos próximos deployments.

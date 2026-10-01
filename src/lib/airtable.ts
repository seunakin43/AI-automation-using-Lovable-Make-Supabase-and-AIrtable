const airtableBaseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
const airtableApiKey = import.meta.env.VITE_AIRTABLE_API_KEY;

export const airtableConfig = {
  baseId: airtableBaseId || '',
  apiKey: airtableApiKey || ''
};

export const airtableReady = Boolean(airtableConfig.baseId && airtableConfig.apiKey);

export async function getAirtableTable(tableName: string) {
  if (!airtableReady) {
    return {
      message: 'Add your Airtable credentials to .env.local to enable live table access.'
    };
  }

  return {
    tableName,
    status: 'configured',
    message: `Airtable access is ready for the ${tableName} table.`
  };
}

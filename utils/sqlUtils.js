export function sqlifyKeyValuePairsForCreate(data) {
  const fields = Object.keys(data);
  const values = Object.values(data);
  const columns = fields.map((field) => `"${field}"`).join(", ");
  const placeholders = values.map((_, index) => `$${index + 1}`).join(", ");
  return { values, columns, placeholders };
}

export function sqlifyKeyValuePairsForUpdate(data) {
  const fields = Object.keys(data);
  const values = Object.values(data);
  const setClause = fields
    .map((field, index) => `"${field}" = $${index + 1}`)
    .join(", ");
  const timestampClause = `"updatedAt" = CURRENT_TIMESTAMP`;
  return { setClause, timestampClause, fields, values };
}

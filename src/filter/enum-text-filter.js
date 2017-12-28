function enumText(value, enumValueTextPairs) {
  if (!value) return '';
  value = value.toString();
  const enumValueTextPair = enumValueTextPairs.find(p => p.value === value);
  if (!enumValueTextPair) {
    return '';
  }
  return enumValueTextPair.text;
}

export default enumText;

const textForRole = (roles, textLines) => {
  const textWithRole = textLines.split('\n').map((line, index) => {
    const role = line.split(':')[0];
    const text = `${index + 1}) ${line.replace(`${role}: `, '')}`;
    return { role, text };
  });
  const byRoles = {};
  textWithRole.forEach(({ role, text }) => {
    byRoles[role] = byRoles[role] || [];
    byRoles[role].push(text);
  });
  let res = Object.entries(byRoles)
    .flatMap(([role, texts]) => [
      role + ':',
      '\n',
      ...texts.join('\n'),
      '\n',
      '\n'
    ])
    .join('');
  res = res.replace(/\n+$/, '');
  return res;
};

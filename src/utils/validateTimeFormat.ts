export function validateTimeFormat(Rule: any) {
  return Rule.required()
    .regex(/^([01]\d|2[0-3])h[0-5]\d$/, {
      name: 'formato de hora',
      invert: false,
    })
    .error('Insira a hora no formato HHhMM, como 08h00 ou 14h30.');
}
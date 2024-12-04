const COLORS = [
  '#FF6B6B',
  '#4ECDC4',
  '#45B7D1',
  '#96CEB4',
  '#FFEEAD',
  '#D4A5A5',
  '#9B59B6',
  '#3498DB',
  '#E67E22',
  '#2ECC71',
];

export function randomColor(): string {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}
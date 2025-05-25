export function slugify(input) {
    return input
        .normalize('NFD') // separa os acentos das letras
        .replace(/[\u0300-\u036f]/g, '') // remove os acentos
        .toLowerCase()
        .replace(/\s+/g, '-') // troca espaços por hífens
        .replace(/[^a-z0-9-]/g, '') // remove caracteres inválidos
        .replace(/--+/g, '-') // remove múltiplos hífens
        .replace(/^-+|-+$/g, ''); // remove hífens do início/fim
}

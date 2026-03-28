// Dark/Light Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Recuperar tema salvo ou usar preferência do sistema
    const savedTheme = localStorage.getItem('theme') || 
                       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Aplicar tema ao carregar a página
    setTheme(savedTheme);
    
    // Event listener para o botão de toggle
    themeToggleBtn.addEventListener('click', function() {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
    
    // Função para definir o tema
    function setTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Atualizar texto e ícone do botão
        const icon = themeToggleBtn.querySelector('span');
        if (theme === 'dark') {
            themeToggleBtn.setAttribute('aria-label', 'Ativar modo claro');
            icon.textContent = '☀️';
        } else {
            themeToggleBtn.setAttribute('aria-label', 'Ativar modo escuro');
            icon.textContent = '🌙';
        }
    }
});

// Função para selecionar perfil
function selectProfile(name, image) {
    localStorage.setItem('perfilAtivoNome', name);
    localStorage.setItem('perfilAtivoImagem', image);
}

// Função para selecionar perfil
function selectProfile(name, image) {
    localStorage.setItem('perfilAtivoNome', name);
    localStorage.setItem('perfilAtivoImagem', image);
}

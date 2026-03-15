<template>
  <section class="hero" aria-labelledby="hero-title">

    <header class="heroContent">
      
      <h1 id="hero-title">Nexora Cloud</h1>

      <p>
        Infraestrutura inteligente para soluções modernas.
        Escale sua aplicação com segurança e performance.
      </p>

      <nav class="heroButtons" aria-label="Ações principais">
        <button class="primary">Começar</button>
        <button class="secondary">Saiba mais</button>
      </nav>

    </header>

  </section>
</template>

<style scoped>

.hero{
height: calc(100vh - 70px);

display:flex;
align-items:center;
justify-content:center;
}

.heroContent{
padding: 75px;
border-radius: 50px;
max-width: 600px;
text-align: left;
background: rgba(20,20,20,0.45);
backdrop-filter: blur(10px);
}

.heroContent h1{
font-size:3rem;
margin-bottom:20px;
}

.heroContent p{
font-size:1.2rem;
opacity:0.8;
margin-bottom:30px;
}

.heroButtons{
display:flex;
gap:15px;
}
/* Primeiro botão */
.primary{
padding:12px 28px;
border-radius:8px;

/* Cria um efeito de gradiente no botão */
background: linear-gradient(
135deg,
var(--color-orange),
var(--color-yellow)
);

border:none;
color:black;
font-weight:600;

/* Define o que vai acontecer no Hover. */
cursor:pointer;
transition: all 0.25s ease;
}
/* Efeitos (Animação) do primeiro botão */
.primary:hover{
transform: translateY(-2px);

box-shadow:
0 8px 25px rgba(255,140,26,0.35);
}

.secondary{
/* Espaço entre os botões de forma geral */
padding:12px 26px;

border-radius:8px;

background: rgba(20,20,20,0.35);

/*  Cria uma borda em torno do botão */
border:1px solid rgba(255,255,255,0.15);

color:white;
font-weight:500;

backdrop-filter: blur(8px);

cursor:pointer;

transition: all 0.25s ease;
}
/* Efeitos (Animação) do segundo botão */
.secondary:hover{   /* Hover, aplica uma animação após o mouse parar sobre o botão */
background: rgba(20,20,20,0.55);

border:1px solid rgba(255,255,255,0.25);

transform: translateY(-2px);

box-shadow:
0 6px 20px rgba(0,0,0,0.35);
}

</style>
<template>
    <header class="header" id="header">
        <div class="line"></div>
        <h1 class="h1" id="title">Рейтинг федерации сквоша России</h1>
        <div class="header__backgroundWrapper">
            <div class="header__background">
                2020
            </div>
        </div>
    </header>
</template>
<script>
  export default {
    name: 'headerBlock',
    data() {
      return {
        title: 'Рейтинг федерации сквоша России',
      }
    },
    mounted() {
      if (process.client) {
        const text = this.title;
        const textArr = text.split('');
        const newEl = document.createElement('h1');
        newEl.innerHTML = `<no-ssr>${textArr.map(letter => `<span class="letter" style="${randomVisibility()}">${letter}</span>`).join('')}</no-ssr>`;
        newEl.classList.add('overlay');
        document.getElementById('header').appendChild(newEl);
      }
    },
  }

  function randomVisibility() {
    return Math.random() < 0.5 ? 'visibility: hidden' : 'visibility: visible';
  }
</script>
<style>
    .header {
        position: relative;
        min-height: 250px;
        padding: 1rem 4rem;
        overflow: hidden;
    }

    h1 {
        position: absolute;
        top: 5%;
        z-index: 1;
        font-size: 3.5rem;
    }

    .overlay {
        z-index: 2;
    }

    .line {
        background-color: #cc2d32;
        border-radius: 10px;
        position: absolute;
        top: 23%;
        left: -1vw;
        transform: translateY(-50%);
        height: .4rem;
        width: 0;
        animation: grow 3s linear forwards;
        z-index: 2;
    }

    .header__backgroundWrapper {
        position: absolute;
        bottom: 30%;
        right: 10%;
        font-size: 2.5rem;
        font-weight: bold;
        transform: rotate(-20deg);
    }

    .header__background {
        position: relative;
        width: 300px;
        display: flex;
        justify-content: center;
        margin-left: 10rem;
    }

    .header__background:before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -135%;
        height: 1px;
        width: 200%;
        border-bottom: 1.5rem solid #cc2d32;
    }

    .header__background:after {
        content: "";
        position: absolute;
        right: 70%;
        top: 30%;
        height: 1px;
        width: 150%;
        border-top: 1.5rem solid #cc2d32;
    }

    @keyframes grow {
        to {
            width: 68vw;
        }
    }

    @media screen and (max-width: 768px) {
        .header__background {
            color: #F5F5F5;
        }
        .header {
            padding: .75rem;
        }
    }
</style>
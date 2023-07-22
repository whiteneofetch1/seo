<template>
  <div>
    <div>
      <main class="intro container--intro">
        <div class="intro__carts">
          <div class="intro__cart">
            <h1 class="intro__cart__title">{{ this.title }}</h1>
          </div>
          <div class="intro__text">
            <h2 class="intro__content">{{ this.description }}</h2>
          </div>
        </div>
      </main>

      <!-- <a href="next__link"></a> -->

      <!-- <nuxt-link to="/rating_webcam">{{this.titleMeta}}</nuxt-link> -->
      <!-- </button> -->

      <div v-for="(item, i) of titleMeta" :key="i">
        <div class="next">
          <div class="next__inner container--intro">
            <!-- <button class="next__btn"> -->
            <nuxt-link class="next__btn" :to="`/${i}`">
              {{ item }}
            </nuxt-link>
            <!-- </button> -->
          </div>
        </div>
      </div>

      <footer class="footer">
        <div class="footer__inner container--intro">
          <h3 class="2022 nft">2023 {{ this.title }}</h3>
          <div class="footer__social"></div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      title: "",
      description: "",
      titleMeta: [
        "создание сайта на тильде",
        "тильда создание сайта с нуля",
        "создание сайтов на тильде отзывы",
        "создание сайта на тильде цена",
        "специалист по созданию сайтов на тильде",
        "фриланс создание сайтов на тильде",
        "продвижение сайтов на тильде",
        "сео продвижение сайта на тильде",
        "seo продвижение сайта на тильде",
        "продвижение сайта на тильде в поисковиках",
        "сео продвижение сайта на тильде с нуля",
      ],
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description,
        },
      ],
    };
  },
  async created() {
    console.log();
    let id = this.$route.params.id;
    if (!id) {
      this.title = " в санкт-петербурге.спб.питер";
    } else {
      const titleMeta = this.titleMeta[id];
      this.title = titleMeta + " в санкт-петербурге.спб.питер";
    }
    this.description =
      "Веб-студия spb-site.ru предлагает создание сайтов на тильде в городе Санкт-Петербурге, доступных для обладателей небольших бюджетов. Мы знаем как сделать качественный сайт, с чистым кодом, хорошим отношением поисковых систем, надежной административной системой, красивым дизайном и удобством для посетителей сайта. И все это мы делаем по весьма демократичным ценам. ";
  },
  async mounted() {},
};
</script>

<style scoped>
/*Обнуление*/
* {
  padding: 0;
  margin: 0;
  border: 0;
}
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}
nav,
footer,
header,
aside {
  display: block;
}
html,
body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
input,
button,
textarea {
  font-family: inherit;
}
input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}
/*--------------------*/

body {
  background-color: rgb(255, 255, 255);
  /* background-attachment: fixed; */
  font-family: "Montserrat", sans-serif;
}

/* модификатор */

.container--intro {
  max-width: 800px;
  margin: 0 auto;
}

.container--header {
  max-width: 460px;
  margin: 0 auto;
}

.header {
  background-color: black;
}

.header__inner {
}

.header__title {
  text-align: center;
  color: #fff;
  padding: 60px 0;
  text-transform: uppercase;
  line-height: 1.5;
}

.header__nav {
  display: flex;
  justify-content: center;
  font-size: 11px;
  text-transform: uppercase;
  padding-bottom: 74px;
}

.header__link {
  color: #fff;
  margin-right: 24px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0);
  transition: border 0.5s;
}

.header__link:last-child {
  margin-right: 0px;
}

.header__link:hover {
  border-bottom: 1px solid rgba(165, 165, 165, 0.605);
}

.intro__cart {
  /* background-image: url(/src/img/blogcard.png); */
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px 5px 0 0;
}

.intro__cart__title {
  font-size: 28px;
  color: black;
  padding: 220px 0 40px 60px;
}

.intro__text {
  /* background-color: rgb(131, 131, 131); */
  border: 1px solid;
  border-radius: 0 0 5px 5px;
}

.intro__content {
  color: rgb(0, 0, 0);
  padding: 36px 60px 44px 60px;
}

/* .intro__cart__perfect {
    background-image: url(/src/img/IMAGEcart.png);
    background-size: cover;
    background-repeat: no-repeat;
  }
  
  .intro__cart__we{
    background-image: url(/src/img/we.png);
    background-size: cover;
    background-repeat: no-repeat;
  }
  
  .subscription {
    display: flex;
    justify-content: center;
  }
  
  .subscription__title {
    color: #fff;
  }
  
  .subscription__btn {
    display: flex;
    justify-content: center;
  } */

.next__inner {
  padding: 50px;
  display: flex;
  justify-content: center;
}

.next__btn {
  padding: 10px 30px;
  border-radius: 5px;
  background-color: rgb(10, 173, 248);
}

.next__btn {
  color: #fff;
}

.footer {
  border-top: 1px solid #000;
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.vk {
  margin-right: 5px;
}

@media (min-width: 900px) {
  body {
    width: 100%;
  }
}

@media (max-width: 600px) {
  .intro__cart__title {
    font-size: 35px;
    line-height: 1.5;
    padding: 220px 10px 40px 10px;
  }

  .intro__content {
    font-size: 20px;
    line-height: 1.5;
    padding: 36px 10px 44px 10px;
  }
}

@media (max-width: 480px) {
  .intro__cart__title {
    font-size: 30px;
    line-height: 1.5;
    padding: 220px 10px 40px 10px;
  }

  .intro__content {
    font-size: 20px;
    line-height: 1.5;
    padding: 36px 10px 44px 10px;
  }
}

@media (max-width: 390px) {
  .intro__cart__title {
    font-size: 29px;
    line-height: 1.5;
    padding: 220px 10px 40px 10px;
  }

  .intro__content {
    font-size: 20px;
    line-height: 1.5;
    padding: 36px 10px 44px 10px;
  }
}

@media (max-width: 300px) {
  .intro__cart__title {
    font-size: 15px;
    padding: 220px 10px 40px 10px;
  }
}

.next__btn {
  margin: 10px;
}

.next__inner {
  padding: 0px;
}
</style>

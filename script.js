  const data = {
      1: {
        description: "<a href=\"https://www.udemy.com/course/the-complete-web-development-bootcamp/\" target=\"_blank\">The Complete Full-Stack Web Development Bootcamp</a>",
        udemy: "<img src='cer.jpg' alt='Image'>",
        repo: "<a href=\"https://github.com/Fnat1k/udemy-proj\" target=\"_blank\">Репозиторій Звіт</a> <a href=\"https://github.com/Fnat1k/udemy-test\" target=\"_blank\">Репозиторій проекту</a>",
        table: "<img src='udemy.png' alt='Image'>",
        image: "<img src='img/1.png' alt='Image'> <img src='img/2.png' alt='Image'> <img src='img/3.png' alt='Image'> <img src='img/4.png' alt='Image'> <img src='img/5.png' alt='Image'>",
        conclusion: `Пройшовши курс "The Complete Full-Stack Web Development Bootcamp" від Dr. Angela Yu на Udemy, можу сказати, що це був надзвичайно цінний досвід. Цей курс, тривалістю понад 62 години, охоплює все необхідне для того, щоб стати впевненим веб-розробником: від основ HTML, CSS і JavaScript до складніших тем, таких як Node.js, React, PostgreSQL, Web3 і навіть розробка децентралізованих додатків (DApps).

Курс виявився ідеальним для мене як для новачка, який раніше не мав глибокого досвіду в програмуванні. Angela пояснює складні концепції дуже доступно, використовуючи анімації та приклади з реального світу, що значно полегшило розуміння. Найбільше мені сподобалася практична спрямованість — я створив понад 30 проєктів, які тепер є частиною мого портфоліо. Наприклад, створення власного веб-додатку з автентифікацією та базою даних було справжнім проривом, адже я побачив, як усі шматочки пазлу (фронтенд, бекенд, бази даних) складаються разом.

Серед плюсів: курс постійно оновлюється, тож я навчався актуальних технологій, які використовуються в індустрії у 2025 році. Також сподобалася гнучкість — я міг навчатися у своєму темпі, повертаючись до складних тем, коли було потрібно. Спільнота студентів і Q&A секція на Udemy також допомагали швидко знайти відповіді на запитання.

Були й певні виклики. Деякі розділи, як-от асинхронний JavaScript або Web3, спочатку здавалися складними, але завдяки детальним поясненням і практичним завданням я зрештою розібрався. Єдине, що могло б бути кращим, — це глибше занурення в деякі сучасні інструменти, як-от новіші версії фреймворків, але це легко компенсується додатковими ресурсами, наприклад, документацією MDN.

Загалом, цей курс дав мені міцну основу для кар’єри у веб-розробці. Я відчуваю себе впевненіше, працюючи з реальними проєктами, і вже почав застосовувати отримані знання у фриланс-проєктах. Рекомендую цей курс усім, хто хоче опанувати повний цикл веб-розробки та готовий інвестувати час у навчання. Це було складно, але воно того варте!`
      },
    };

    let currentLab = 1;

    function selectLab(num) {
      currentLab = num;
      document.querySelectorAll(".lab-btn").forEach(btn => btn.classList.remove("active"));
      event.target.classList.add("active");
      document.getElementById('output').innerHTML = "" + num;
    }

    function showSection(section) {
      const lab = data[currentLab];
      const content = lab && lab[section] ? lab[section] : "Немає даних для цього розділу.";
      document.getElementById('output').innerHTML = content;
    }
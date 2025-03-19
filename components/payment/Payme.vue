<script setup lang="ts">
onNuxtReady(() => {
    // Paycom skriptini yuklash
    const script = document.createElement("script");
    script.src = "https://cdn.paycom.uz/integration/js/checkout.min.js";
    script.async = true;
    script.onload = () => {
      if (window.Paycom) {
        // Skript yuklangandan so‘ng tugmani yaratish
        Paycom.Button("#form-payme", "#button-container");
      }
    };
    document.body.appendChild(script);
});

const details = {
  "receipt_type": 0, //тип фискального чека
      "shipping": { //доставка, необязательное поле
    "title": "Доставка до ттз-4 28/23",
        "price": 500000
  },
  "items": [ //товарная позиция, обязательное поле дл фискализации
    {
      "discount":10000, //Скидка с учетом количества товаров или услуг в тийинах
      "title": "Помидоры", //нааименование товара или услуги
      "price": 505000, //цена за единицу товара или услуги, сумма указана в тийинах
      "count": 2, //кол-во товаров или услуг
      "code": "00702001001000001", // код *ИКПУ обязательное поле
      "units": 241092, //значение изменится в зависимости от вида товара
      "vat_percent": 15, //обязательное поле, процент уплачиваемого НДС для данного товара или услуги
      "package_code": "123456" //Код упаковки для конкретного товара или услуги, содержится на сайте в деталях найденного ИКПУ.
    }
  ]
}
</script>

<template>
  <div>
    <form method="POST" action="https://checkout.paycom.uz">

      <!-- Идентификатор WEB Кассы -->
      <input type="hidden" name="merchant" value="666a96d069ec2ab057da04ac"/>
      <input type="hidden" name="test_key" value="666a96d069ec2ab057da04ac"/>

      <!-- Сумма платежа в тийинах -->
      <input type="hidden" name="amount" value="20000"/>

      <!-- Поля Объекта Account -->
      <input type="hidden" name="account[order_id]" value="67d5afbed9739b6cb1b0ebef"/>

      <!-- ==================== НЕОБЯЗАТЕЛЬНЫЕ ПОЛЯ ====================== -->
      <!-- Язык. Доступные значения: ru|uz|en
           Другие значения игнорируются
           Значение по умолчанию ru -->
      <input type="hidden" name="lang" value="uz"/>

      <input type="hidden" name="token" value="wefwefwef"/>

      <!-- URL возврата после оплаты или отмены платежа.
           Если URL возврата не указан, он берется из заголовка запроса Referer.
           URL возврата может содержать параметры, которые заменяются Paycom при запросе.
           Доступные параметры для callback:
           :transaction - id транзакции или "null" если транзакцию не удалось создать
           :account.{field} - поля объекта Account
           Пример: https://your-service.uz/paycom/:transaction -->
      <input type="hidden" name="callback" value="http://localhost:3000/products/7"/>

      <!-- Таймаут после успешного платежа в миллисекундах.
           Значение по умолчанию 15
           После успешной оплаты, по истечении времени callback_timeout
           производится перенаправление пользователя по url возврата после платежа -->
      <input type="hidden" name="callback_timeout" value="2000000"/>

      <!-- Описание платежа
           Для описания платежа доступны 3 языка: узбекский, русский, английский.
           Для описания платежа на нескольких языках следует использовать
           несколько полей с атрибутом  name="description[{lang}]"
           lang может принимать значения ru|en|uz -->
      <input type="hidden" name="description" value="{Описание платежа}"/>

      <!-- Объект детализации платежа
           Поле для детального описания платежа, например, перечисления
           купленных товаров, стоимости доставки, скидки.
           Значение поля (value) — JSON-строка закодированная в BASE64 -->
      <!-- ================================================================== -->
      <input type="hidden" name="detail" :value="details"/>


      <Button type="submit" class="w-full">{{ $t('payment') }} (Payme orqali)</Button>
    </form>
  </div>
</template>

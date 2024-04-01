$(document).ready(function () {
  // フォームのバリデーションルールとメッセージを設定
  $("#form").validate({
    rules: {
      user_name: {
        required: true,
        maxlength: 100,
      },
      user_email: {
        required: true,
        email: true,
        maxlength: 254,
      },
      user_message: {
        maxlength: 1000,
      },
    },
    messages: {
      user_name: {
        required: "ご担当者名を入力してください",
        maxlength: "100文字以内で入力してください",
      },
      user_email: {
        required: "メールアドレスを入力してください",
        email: "正しい形式で入力してください",
        maxlength: "254文字以内で入力してください",
      },
      user_message: {
        maxlength: "1000文字以内で入力してください",
      },
    },
    errorElement: "div",
    errorPlacement: function (error, element) {
      error.addClass("validate-feedback");
      if (element.attr("name") === "inquiry_type") {
        error.insertAfter(".p-contact__form-list-item-radio");
      } else {
        error.insertAfter(element);
      }
    },
  });
});

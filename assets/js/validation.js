$(document).ready(function () {
  // フォームのバリデーションルールとメッセージを設定
  $("#js-form").validate({
    rules: {
      field_7131055_sei: {
        required: true,
        maxlength: 50,
      },
      field_7131055_mei: {
        required: true,
        maxlength: 50,
      },
      field_7131056: {
        required: true,
        email: true,
        maxlength: 254,
      },
      field_7131065: {
        required: true,
        maxlength: 1000,
      },
    },
    messages: {
      field_7131055_sei: {
        required: "姓を入力してください",
        maxlength: "50文字以内で入力してください",
      },
      field_7131055_mei: {
        required: "名を入力してください",
        maxlength: "50文字以内で入力してください",
      },
      field_7131056: {
        required: "メールアドレスを入力してください",
        email: "正しい形式で入力してください",
        maxlength: "254文字以内で入力してください",
      },
      field_7131065: {
        required: "お問い合わせ内容を入力してください",
        maxlength: "1000文字以内で入力してください",
      },
    },
    errorElement: "div",
    errorPlacement: function (error, element) {
      error.addClass("validate-feedback");
      error.insertAfter(element);
    },
  });
});

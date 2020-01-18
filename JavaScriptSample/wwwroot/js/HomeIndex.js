$(function () {

    $(document).on("click", "#CallModalDialog", function () {
        $.ajax({
            url: _appSettings.AppRootPath + "Home/ModalDialog",
            type: "POST",
            data: {
                "country": "ja-JP",
                "userid": "999999",
            }
        }).done((data) => {
            $("body").append($(data));
            $("#ModalDialog").modal("show");
        }).fail((data) => {
            alert("fail" + data);
        }).always((data) => {
            // 正常終了でも異常終了でも常に実行される
        });
    });
}); 
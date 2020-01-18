using System;
namespace JavaScriptSample.Models
{
    public class ModalDialogModel
    {
        public string Country { get; set; }

        public string UserId { get; set; }

        public string UserName => string.IsNullOrWhiteSpace(this.UserId) ? "" : $"{this.UserId}さん";

        public string CountryName => string.IsNullOrWhiteSpace(this.Country) ? "" : $"{this.Country}の国";

        public ModalDialogModel()
        {
        }

    }
}

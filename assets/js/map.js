document.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = `
            <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d428.83510684779606!2d-7.442483432032491!3d43.69293927693875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDPCsDQxJzM0LjkiTiA3wrAyNiczMi44Ilc!5e0!3m2!1ses-419!2ses!4v1691745239180!5m2!1ses-419!2ses"></iframe>
        `;
    }, 500);
});
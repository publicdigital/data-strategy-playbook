document.addEventListener("DOMContentLoaded", () => {
  // Escuchamos el click del botón
  const $boton = document.querySelector(".btnCrearPdf");
  $boton.addEventListener("click", () => {
    // $("#header-pdf").removeClass("d-none");
     $("#step-box-final-pdf").removeClass("d-none");
    const $elementoParaConvertir = document.getElementById("step-box-final-pdf"); // <-- Aquí puedes elegir cualquier elemento del DOM
    html2pdf()
      .set({
        margin: 0.5,
        filename: "Evaluacion-pd.pdf",
        image: {
          type: "jpeg",
          quality: 0.98,
        },
        html2canvas: {
          scale: 3, // A mayor escala, mejores gráficos, pero más peso
          letterRendering: true,
        },
        jsPDF: {
          unit: "in",
          format: "letter",
          orientation: "landscape", // landscape o portrait
        },
      })
      .from($elementoParaConvertir)
      .save()
      .catch((err) => console.log(err));
  });
});

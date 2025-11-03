function get_year()
{
    const year = new Date().getFullYear();
    //console.log(year);
    let span_year = document.getElementById("year");
    span_year.textContent = year;
}

function get_pdf()
{
    let pdf_button = document.getElementById("b_download_pdf");
    pdf_button.addEventListener("click",download_pdf);
}

function download_pdf()
{
   window.print()
}

get_year();
get_pdf();
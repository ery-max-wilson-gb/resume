function get_year()
{
    const year = new Date().getFullYear();
    //console.log(year);
    let span_year = document.getElementById("year");
    span_year.textContent = year;
}

get_year();
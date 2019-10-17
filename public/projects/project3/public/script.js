$(document).ready(function() {

            $("#myBtn").on("click", getDrink);

            function getDrink() {
                console.log("in getDrink");
                $.ajax({
                    method: "GET",
                    url: "https://thecocktaildb.com/api/json/v1/1/search.php?",
                    dataType: "json",
                    data: { s: $("#search").val() },
                    success: function(result, status) {
                        $("#drinkNm").html(result.drinks[0].strDrink);
                        $("#image").attr("src", result.drinks[0].strDrinkThumb);
                        $("#directions").html("<strong>Directions:</strong><br>" + result.drinks[0].strInstructions);
                        $("#glass").html("<strong>Served in:</strong><br>" + result.drinks[0].strGlass)
                        $("#ingrediantsList").html("<strong>Ingredients:</strong>");
                        $("#ingrediantsList").append("<tr>");
                        if (result.drinks[0].strIngredient1 != null) {
                            $("#ingrediantsList").append("<td>" + result.drinks[0].strIngredient1 + "</td>");
                            if (result.drinks[0].strMeasure1 != null) {
                                $("#ingrediantsList").append("<td>" + result.drinks[0].strMeasure1 + "</td>");
                            }
                            $("#ingrediantsList").append("</tr>");
                        }
                        $("#ingrediantsList").append("<tr>");
                        if (result.drinks[0].strIngredient2 != null) {
                            $("#ingrediantsList").append("<td>" + result.drinks[0].strIngredient2 + "</td>");
                            if (result.drinks[0].strMeasure2 != null) {
                                $("#ingrediantsList").append("<td>" + result.drinks[0].strMeasure2 + "</td>");
                            }
                            $("#ingrediantsList").append("</tr>");
                        }
                        $("#ingrediantsList").append("<tr>");
                        if (result.drinks[0].strIngredient3 != null) {
                            $("#ingrediantsList").append("<td>" + result.drinks[0].strIngredient3 + "</td>");
                            if (result.drinks[0].strMeasure3 != null) {
                                $("#ingrediantsList").append("<td>" + result.drinks[0].strMeasure3 + "</td>");
                            }
                            $("#ingrediantsList").append("</tr>");
                        }
                        $("#ingrediantsList").append("<tr>");
                        if (result.drinks[0].strIngredient4 != null) {
                            $("#ingrediantsList").append("<td>" + result.drinks[0].strIngredient4 + "</td>");
                            if (result.drinks[0].strMeasure4 != null) {
                                $("#ingrediantsList").append("<td>" + result.drinks[0].strMeasure4 + "</td>");
                            }
                            $("#ingrediantsList").append("</tr>");
                        }
                        $("#ingrediantsList").append("<tr>");
                        if (result.drinks[0].strIngredient5 != null) {
                            $("#ingrediantsList").append("<td>" + result.drinks[0].strIngredient5 + "</td>");
                            if (result.drinks[0].strMeasure5 != null) {
                                $("#ingrediantsList").append("<td>" + result.drinks[0].strMeasure5 + "</td>");
                            }
                            $("#ingrediantsList").append("</tr>");
                        }
                        $("#ingrediantsList").append("<tr>");
                        if (result.drinks[0].strIngredient6 != null) {
                            $("#ingrediantsList").append("<td>" + result.drinks[0].strIngredient6 + "</td>");
                            if (result.drinks[0].strMeasure6 != null) {
                                $("#ingrediantsList").append("<td>" + result.drinks[0].strMeasure6 + "</td>");
                            }
                            $("#ingrediantsList").append("</tr>");
                        }
                        $("#ingrediantsList").append("<tr>");
                        if (result.drinks[0].strIngredient7 != null) {
                            $("#ingrediantsList").append("<td>" + result.drinks[0].strIngredient7);
                            if (result.drinks[0].strMeasure7 != null) {
                                $("#ingrediantsList").append("<td>" + result.drinks[0].strMeasure7 + "</td>");
                            }
                            $("#ingrediantsList").append("</tr>");
                        }
                        $("#ingrediantsList").append("<tr>");
                        if (result.drinks[0].strIngredient8 != null) {
                            $("#ingrediantsList").append("<td>" + result.drinks[0].strIngredient8 + "</td>");
                            if (result.drinks[0].strMeasure8 != null) {
                                $("#ingrediantsList").append("<td>" + result.drinks[0].strMeasure8 + "</td>");
                            }
                            $("#ingrediantsList").append("</tr>");
                        }
                        $("#ingrediantsList").append("<tr>");
                        if (result.drinks[0].strIngredient9 != null) {
                            $("#ingrediantsList").append("<td>" + result.drinks[0].strIngredient9 + "</td>");
                            if (result.drinks[0].strMeasure9 != null) {
                                $("#ingrediantsList").append("<td>" + result.drinks[0].strMeasure9 + "</td>");
                            }
                            $("#ingrediantsList").append("</tr>");
                        }
                        $("#ingrediantsList").append("<tr>");
                        if (result.drinks[0].strIngredient10 != null) {
                            $("#ingrediantsList").append("<td>" + result.drinks[0].strIngredient10 + "</td>");
                            if (result.drinks[0].strMeasure10 != null) {
                                $("#ingrediantsList").append("<td>" + result.drinks[0].strMeasure10 + "</td>");
                            }
                            $("#ingrediantsList").append("</tr>");
                        }
                        $("#ingrediantsList").append("<tr>");
                        if (result.drinks[0].strIngredient11 != null) {
                            $("#ingrediantsList").append("<td>" + result.drinks[0].strIngredient11 + "</td>");
                            if (result.drinks[0].strMeasure11 != null) {
                                $("#ingrediantsList").append("<td>" + result.drinks[0].strMeasure11 + "</td>");
                            }
                            $("#ingrediantsList").append("</tr>");
                        }
                        $("#ingrediantsList").append("<tr>");
                        if (result.drinks[0].strIngredient12 != null) {
                            $("#ingrediantsList").append("<td>" + result.drinks[0].strIngredient12 + "</td>");
                            if (result.drinks[0].strMeasure12 != null) {
                                $("#ingrediantsList").append("<td>" + result.drinks[0].strMeasure12 + "</td>");
                            }
                            $("#ingrediantsList").append("</tr>");
                        }
                        $("#ingrediantsList").append("<tr>");
                        if (result.drinks[0].strIngredient13 != null) {
                            $("#ingrediantsList").append("<td>" + result.drinks[0].strIngredient13 + "</td>");
                            if (result.drinks[0].strMeasure13 != null) {
                                $("#ingrediantsList").append("<td>" + result.drinks[0].strMeasure13 + "</td>");
                            }
                            $("#ingrediantsList").append("</tr>");
                        }
                        $("#ingrediantsList").append("<tr>");
                        if (result.drinks[0].strIngredient14 != null) {
                            $("#ingrediantsList").append("<td>" + result.drinks[0].strIngredient14 + "</td>");
                            if (result.drinks[0].strMeasure14 != null) {
                                $("#ingrediantsList").append("<td>" + result.drinks[0].strMeasure14 + "</td>");
                            }
                            $("#ingrediantsList").append("</tr>");
                        }
                        $("#ingrediantsList").append("<tr>");
                        if (result.drinks[0].strIngredient15 != null) {
                            $("#ingrediantsList").append("<td>" + result.drinks[0].strIngredient15 + "</td>");
                            if (result.drinks[0].strMeasure15 != null) {
                                $("#ingrediantsList").append("<td>" + result.drinks[0].strMeasure15 + "</td>");
                            }
                            $("#ingrediantsList").append("</tr>");
                        }

                    }
                }); //ajax
            };
        }); //document
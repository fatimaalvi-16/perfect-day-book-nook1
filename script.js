/* =========================
   NIGHT MODE
========================= */

const themeButton =
    document.getElementById("themeButton");


if (themeButton) {

    themeButton.addEventListener(
        "click",
        function () {

            document.body.classList.toggle("night");


            const timeText =
                document.getElementById("timeText");


            if (
                document.body.classList.contains("night")
            ) {

                themeButton.innerText =
                    "☀️ Day Mode";


                if (timeText) {

                    timeText.innerText =
                        "A peaceful night for reading... 🌙";

                }

            } else {

                themeButton.innerText =
                    "🌙 Night Mode";


                if (timeText) {

                    timeText.innerText =
                        "A peaceful morning awaits...";

                }

            }

        }
    );

}


/* =========================
   LAMP
========================= */

const lamp =
    document.getElementById("lamp");


if (lamp) {

    lamp.addEventListener(
        "click",
        function () {

            if (
                lamp.innerText.trim() === "💡"
            ) {

                lamp.innerText = "✨";

            } else {

                lamp.innerText = "💡";

            }

        }
    );

}


/* =========================
   MUG
========================= */

const mug =
    document.getElementById("mug");


if (mug) {

    mug.addEventListener(
        "click",
        function () {

            alert(
                "☕ Your cozy drink is ready! Perfect reading fuel. 📖✨"
            );

        }
    );

}


/* =========================
   BOOK GENRES
========================= */

const genreButtons =
    document.querySelectorAll("[data-genre]");


genreButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const genre =
                    button.getAttribute("data-genre");


                const result =
                    document.getElementById(
                        "genreResult"
                    );


                if (!result) {

                    return;

                }


                if (genre === "Fantasy") {

                    result.innerHTML = `

                        <span class="result-icon">🪄</span>

                        <h2>Welcome to Fantasy</h2>

                        <p>
                            Step into magical worlds filled
                            with enchanted forests, mysterious
                            kingdoms and impossible adventures.
                        </p>

                        <p>
                            ✨ Perfect for when reality needs
                            a little more magic.
                        </p>

                    `;

                }


                else if (
                    genre === "Mystery"
                ) {

                    result.innerHTML = `

                        <span class="result-icon">🔍</span>

                        <h2>Welcome to Mystery</h2>

                        <p>
                            Follow clues, uncover secrets
                            and see if you can solve the
                            mystery before everyone else.
                        </p>

                        <p>
                            🔎 Keep your detective brain ready.
                        </p>

                    `;

                }


                else if (
                    genre === "Romance"
                ) {

                    result.innerHTML = `

                        <span class="result-icon">💗</span>

                        <h2>Welcome to Romance</h2>

                        <p>
                            Enter stories filled with feelings,
                            friendships and unforgettable
                            connections.
                        </p>

                        <p>
                            ♡ Warning: emotional attachment
                            to fictional characters is possible.
                        </p>

                    `;

                }


                else if (
                    genre === "Adventure"
                ) {

                    result.innerHTML = `

                        <span class="result-icon">🗺️</span>

                        <h2>Welcome to Adventure</h2>

                        <p>
                            Grab your imaginary backpack
                            and explore somewhere completely new.
                        </p>

                        <p>
                            🧭 Your next journey is waiting.
                        </p>

                    `;

                }


                else if (
                    genre === "Thriller"
                ) {

                    result.innerHTML = `

                        <span class="result-icon">🕯️</span>

                        <h2>Welcome to Thriller</h2>

                        <p>
                            Secrets, suspense and unexpected
                            twists are waiting behind every page.
                        </p>

                        <p>
                            👀 Just one more chapter...
                            probably.
                        </p>

                    `;

                }


                else if (
                    genre === "Poetry"
                ) {

                    result.innerHTML = `

                        <span class="result-icon">🦋</span>

                        <h2>Welcome to Poetry</h2>

                        <p>
                            Slow down and explore beautiful
                            words, emotions and tiny moments.
                        </p>

                        <p>
                            ✿ Sometimes a few words can
                            say everything.
                        </p>

                    `;

                }


                result.scrollIntoView({

                    behavior: "smooth",

                    block: "center"

                });

            }
        );

    }
);


/* =========================
   PERFECT DAY
========================= */

let perfectDay = {

    morning: "",

    afternoon: "",

    evening: ""

};


const dayChoices =
    document.querySelectorAll(
        ".day-choice"
    );


dayChoices.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const choice =
                    button.getAttribute(
                        "data-choice"
                    );


                const value =
                    button.getAttribute(
                        "data-value"
                    );


                perfectDay[choice] =
                    value;


                const buttons =
                    document.querySelectorAll(
                        `[data-choice="${choice}"]`
                    );


                buttons.forEach(
                    function (item) {

                        item.classList.remove(
                            "selected"
                        );

                    }
                );


                button.classList.add(
                    "selected"
                );


                updatePerfectDay();

            }
        );

    }
);


function updatePerfectDay() {

    const result =
        document.getElementById(
            "dayResult"
        );


    if (!result) {

        return;

    }


    if (
        perfectDay.morning === "" ||
        perfectDay.afternoon === "" ||
        perfectDay.evening === ""
    ) {

        result.innerHTML = `

            <p>
                Keep choosing your favorite moments
                to complete your perfect day. ♡
            </p>

        `;

        return;

    }


    result.innerHTML = `

        <p>
            🌅 ${perfectDay.morning}
        </p>

        <p>
            ☀️ ${perfectDay.afternoon}
        </p>

        <p>
            🌙 ${perfectDay.evening}
        </p>

        <br>

        <p>
            ✨ And that's your perfect day.
            Honestly? Pretty iconic.
        </p>

    `;

}


/* RESET PERFECT DAY */

const resetDay =
    document.getElementById(
        "resetDay"
    );


if (resetDay) {

    resetDay.addEventListener(
        "click",
        function () {

            perfectDay = {

                morning: "",

                afternoon: "",

                evening: ""

            };


            document
                .querySelectorAll(
                    ".day-choice"
                )
                .forEach(
                    function (button) {

                        button.classList.remove(
                            "selected"
                        );

                    }
                );


            updatePerfectDay();

        }
    );

}


/* =========================
   COZY CORNER
========================= */

let cozySetup = {

    drink: "",

    music: "",

    light: ""

};


const cozyOptions =
    document.querySelectorAll(
        ".cozy-option"
    );


cozyOptions.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const type =
                    button.getAttribute(
                        "data-type"
                    );


                const value =
                    button.getAttribute(
                        "data-value"
                    );


                cozySetup[type] =
                    value;


                const buttons =
                    document.querySelectorAll(
                        `[data-type="${type}"]`
                    );


                buttons.forEach(
                    function (item) {

                        item.classList.remove(
                            "selected"
                        );

                    }
                );


                button.classList.add(
                    "selected"
                );


                updateCozySetup();

            }
        );

    }
);


function updateCozySetup() {

    const result =
        document.getElementById(
            "cozyResult"
        );


    if (!result) {

        return;

    }


    result.innerHTML = `

        <p>
            ${cozySetup.drink ||
            "☕ Choose your perfect drink"}
        </p>

        <p>
            ${cozySetup.music ||
            "🎵 Choose your atmosphere"}
        </p>

        <p>
            ${cozySetup.light ||
            "💡 Choose your lighting"}
        </p>

    `;


    if (
        cozySetup.drink !== "" &&
        cozySetup.music !== "" &&
        cozySetup.light !== ""
    ) {

        result.innerHTML += `

            <br>

            <p>
                ✨ Your perfect cozy reading
                corner is ready!
            </p>

        `;

    }

}


/* RESET COZY CORNER */

const resetCozy =
    document.getElementById(
        "resetCozy"
    );


if (resetCozy) {

    resetCozy.addEventListener(
        "click",
        function () {

            cozySetup = {

                drink: "",

                music: "",

                light: ""

            };


            document
                .querySelectorAll(
                    ".cozy-option"
                )
                .forEach(
                    function (button) {

                        button.classList.remove(
                            "selected"
                        );

                    }
                );


            updateCozySetup();

        }
    );
}

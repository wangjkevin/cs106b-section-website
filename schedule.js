const SECTION_1 = {
    emoji: "⚙️",
    title: "C++ Fundamentals, Electric Boogaloo",
    date: new Date(2026, 10 - 1, 2),
    slides: "https://docs.google.com/presentation/d/1M38sEQSkJPgUn-fS80_ZalNKMKrJ4dqolMaMRwUrlZM/edit?usp=sharing",
    handout: "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1272/sections/section1/",
    miscLinks: {
        "Style Guide": "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1266/resources/style_guide"
    }
};

const SECTION_2 = {
    emoji: "🗃️",
    title: "O-mazing ADTs to the Rescue!",
    date: new Date(2026, 10 - 1, 9),
    slides: "https://docs.google.com/presentation/d/1MEokHTR1Lx0VkHdCGmNyua95UZj44I3s1OhOZ8fu4Mk/edit?usp=sharing",
    handout: "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1272/sections/section2/",
    miscLinks: {
        "ADT Reference Sheet": "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1266/exams/1-midterm/refsheet.pdf",
    }
};

const SECTION_3 = {
    emoji: "🌀",
    title: "Recursion: The Leap of Faith",
    date: new Date(2026, 10 - 1, 16),
    slides: "https://docs.google.com/presentation/d/1kA23qrbTc_1t6vCTt53lxoDx0aevXcThjODKw_WFKYw/edit?usp=sharing",
    handout: "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1272/sections/section3/",
    miscLinks: {
        "This page... :-)": ".",
        "Crows Know Recursion?!": "https://www.scientificamerican.com/article/crows-perform-yet-another-skill-once-thought-distinctively-human/"
    }
};

const SECTION_4 = {
    emoji: "🎒",
    title: "Dead Ends ~ Backpacking and Backtracking",
    date: new Date(2026, 10 - 1, 23),
    slides: "https://docs.google.com/presentation/d/1fozehS7URkGeR8ZSKXJrbhJ_Y0JepAzUtUKwAK8dsIQ/edit?usp=sharing",
    handout: "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1272/sections/section4/",
    miscLinks: {
        "More on Knapsack": "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1252/lectures/12-backtracking2/slides",
        "Knapsack with Genetic Algorithms?!": "https://youtu.be/MacVqujSXWE",
        "Knapsack Solution": "./code/knapsack.zip"
    }
};

const SECTION_5 = {
    emoji: "🐼",
    title: "Types You Can Create?! And Dynamic Memory...",
    date: new Date(2026, 10 - 1, 30),
    slides: "https://docs.google.com/presentation/d/1TIgqrJz8v2hEneLEsX3zaDaqVasFA5_M_raA2Cv5ehA/edit?usp=sharing",
    handout: "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1272/sections/section5/",
    miscLinks: {
        "Kiwi! 🥝🐦": "https://youtu.be/sdUUx5FdySs"
    }
};

const SECTION_6 = {
    emoji: "☝️",
    title: "Pointer Mayhem with Pokémon!",
    date: new Date(2026, 11 - 1, 6),
    slides: "https://docs.google.com/presentation/d/1Bxcxw_A7DYsLHojtxpSmBxznp3eEe7GzJJnwN0PQW-I/edit?usp=sharing",
    handout: "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1272/sections/section6/",
    miscLinks: {
        "Pointers with Binky": "https://www.youtube.com/watch?v=5VnDaHBi8dM&pp=ygUWcG9pbnRlciBmdW4gd2l0aCBiaW5reQ%3D%3D"
    }
};

const SECTION_7 = {
    emoji: "🔗",
    title: "Linked Lists, aka Kurapika's Chains",
    date: new Date(2026, 11 - 1, 13),
    slides: "https://docs.google.com/presentation/d/1qmV7APwgCHwDoM-uQPsWedKFCj7oQKRPrT2NG8mxwis/edit?usp=sharing",
    handout: "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1272/sections/section7/",
    miscLinks: {
        "More Linked List Problems": "http://cslibrary.stanford.edu/103/"
    }
};

const SECTION_8 = {
    emoji: "🌴",
    title: "Trees, the 💖 of CS!",
    date: new Date(2026, 11 - 1, 20),
    slides: "https://docs.google.com/presentation/d/1ddn4f7LACSRdDXvlnUFRTLBsxo3pWtXrmYf4rQQPWKg/edit?usp=sharing",
    handout: "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1272/sections/section8/",
    miscLinks: {
    }
};

const SECTION_9 = {
    emoji: "🌟",
    title: "The Journey's End, The Journey Onward",
    date: new Date(2026, 11 - 1, 27),
    slides: "https://docs.google.com/presentation/d/19kXllTb2LiJViKj88DjBM8O9bJ68iO8808l9Xj6JYCg/edit?usp=sharing",
    handout: "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1272/sections/section9/",
    miscLinks: {
        "Extra Practice": "./finale"
    }
};

const SECTIONS = [
    SECTION_1,
    SECTION_2,
    SECTION_3,
    SECTION_4,
    SECTION_5,
    SECTION_6,
    SECTION_7,
    SECTION_8,
    SECTION_9
];

const ONE_DAY = 24 * 60 * 60 * 1000

/* setDivs takes in one argument, sections, and properly injects the data in the array sections
 * into the html page for a clean, nicely formatted schedule!
 */
function setDivs(sections) {
    let container = document.getElementById("schedule");

    // TODO: set this date to be today's date!!!! this is just a placeholder date!!!!
    let todaysDate = new Date(2026, 11 - 1, 28);
    // let todaysDate = new Date();

    for (let i = 0; i < sections.length; i++) {
        // note that months are 0-indexed with Date objects (like what?!)
        let formattedDate = (sections[i].date.getMonth() + 1) + "/" + (sections[i].date.getDate());

        // template code -- easier to type out this way in html than in javascript
        // note: (todaysDate - 1) to have the section content released one day before section day
        let sectionHTML = `
        <div class="portal">Section ${i + 1}</div>
        <div class="${(sections[i].date - ONE_DAY <= todaysDate) ? "" : "locked"} content">
            <div class="title">${sections[i].emoji + " " + sections[i].title} <span class="date">- ${formattedDate}</span></div>
            <div class="resources">
                <a class="clicky portal slides" href="${sections[i].slides}" target="_blank">Slides</a>
                <a class="clicky portal handout" href="${sections[i].handout}" target="_blank">Handout</a>
            </div>
        </div>
        `;

        let section = document.createElement("div");
        section.className = "section";
        section.id = "section" + (i + 1);
        section.innerHTML = sectionHTML;

        // append it immediately so that we can check for miscellaneous links
        container.appendChild(section);

        if (Object.keys(sections[i].miscLinks).length != 0) {
            let resources = document.getElementById("section" + (i + 1)).getElementsByClassName("resources")[0];

            for (let key in sections[i].miscLinks) {
                let miscLink = document.createElement("a");
                miscLink.setAttribute("href", (sections[i].miscLinks)[key]);
                miscLink.setAttribute("target", "_blank");
                miscLink.setAttribute("class", "clicky portal misc-link");
                miscLink.innerHTML = key;

                resources.appendChild(miscLink);
            }
        }
    }
}

setDivs(SECTIONS);

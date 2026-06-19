const section1 = {
    emoji: "⚙️",
    title: "C++ Fundamentals, Electric Boogaloo",
    date: new Date(2026, 1 - 1, 16),
    slides: "https://docs.google.com/presentation/d/1EQYKBR_4UdAOWbwMWG1L8WqCs86SvEVNy7Nz2MqIvu4/edit?usp=sharing",
    handout: "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1264/sections/section1/",
    miscLinks: {
        "Style Guide": "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1264/course/style_guide/"
    }
};

const section2 = {
    emoji: "🗃️",
    title: "O-mazing ADTs to the Rescue!",
    date: new Date(2026, 1 - 1, 23),
    slides: "https://docs.google.com/presentation/d/1uAGAxsRfMo1qQMGPAx47Nnw_WLcUEM4wFQ03dacI2eU/edit?usp=sharing",
    handout: "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1264/sections/section2/",
    miscLinks: {
        "ADT Reference Sheet": "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1262/assessments/1-midterm/refsheet.pdf"
    }
};

const section3 = {
    emoji: "🌀",
    title: "Recursion: The Leap of Faith",
    date: new Date(2026, 1 - 1, 30),
    slides: "https://docs.google.com/presentation/d/1EdfhHQoEGDIhM6lMxzisu1cp1a6o1SF9diEJ9OrCqu8/edit?usp=sharing",
    handout: "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1264/sections/section3/",
    miscLinks: {
        "This page... :-)": ".",
        "Crows Know Recursion?!": "https://www.scientificamerican.com/article/crows-perform-yet-another-skill-once-thought-distinctively-human/"
    }
};

const section4 = {
    emoji: "🎒",
    title: "Backpacking and Backtracking",
    date: new Date(2026, 2 - 1, 6),
    slides: "https://docs.google.com/presentation/d/1ElKUAiJaZWAo6JXW9wcdW3KBr56LuFWx2exiFHnXLO8/edit?usp=sharing",
    handout: "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1264/sections/section4/",
    miscLinks: {
        "More on Knapsack": "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1252/lectures/12-backtracking2/slides",
        "Knapsack with Genetic Algorithms?!": "https://youtu.be/MacVqujSXWE",
        "Knapsack Solution": "./code/knapsack.zip"
    }
};

const section5 = {
    emoji: "🐼",
    title: "Types You Can Create! And Dynamic Memory...",
    date: new Date(2026, 2 - 1, 13),
    slides: "https://docs.google.com/presentation/d/1sDPIeSCeCFIPSuf3x6XbuEuIGxmBadAEmTuA5S_jUmU/edit?usp=sharing",
    handout: "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1264/sections/section5/",
    miscLinks: {
    }
};

const section6 = {
    emoji: "☝️",
    title: "Pointer Mayhem, or That One Spiderman Meme",
    date: new Date(2026, 2 - 1, 20),
    slides: "https://docs.google.com/presentation/d/1TJzoA-gbIDLCEvLOI5o_9rzg0wEgo8rrCeKDFcUIsmM/edit?usp=sharing",
    handout: "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1264/sections/section6",
    miscLinks: {
        "Pointers with Binky": "https://www.youtube.com/watch?v=5VnDaHBi8dM&pp=ygUWcG9pbnRlciBmdW4gd2l0aCBiaW5reQ%3D%3D"
    }
};

const section7 = {
    emoji: "🔗",
    title: "Linked Lists, aka Kurapika's Chains",
    date: new Date(2026, 2 - 1, 27),
    slides: "https://docs.google.com/presentation/d/1q-yroWhqnoczvdDq-QW9LHFJ6GTBNoacPiZjd60i2JQ/edit?usp=sharing",
    handout: "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1264/sections/section7",
    miscLinks: {
        "More Linked List Problems": "http://cslibrary.stanford.edu/103/"
    }
};

const section8 = {
    emoji: "🌴",
    title: "Trees, the 💖 of CS!",
    date: new Date(2026, 3 - 1, 6),
    slides: "https://docs.google.com/presentation/d/157hebzIM-nU6dCGGERrBUSuZHyE4Dv3jmYkQ7Tnwwuc/edit?usp=sharing",
    handout: "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1264/sections/section8",
    miscLinks: {
    }
};

const section9 = {
    emoji: "🌟",
    title: "The Journey's End, The Journey Onward",
    date: new Date(2026, 3 - 1, 13),
    slides: "https://docs.google.com/presentation/d/1U8AUIvLvxCNrGuMog7XWxOZYDRVEUdrxcVJOzd-UEL8/edit?usp=sharing",
    handout: "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1264/sections/section9/",
    miscLinks: {
        "Extra Practice": "./finale"
    }
};


const sections = [
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7,
    section8,
    section9
];

const ONE_DAY = 24 * 60 * 60 * 1000

/* setDivs takes in one argument, sections, and properly injects the data in the array sections
 * into the html page for a clean, nicely formatted schedule!
 */
function setDivs(sections) {
    let container = document.getElementById("schedule");

    let todaysDate = new Date();

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

setDivs(sections);

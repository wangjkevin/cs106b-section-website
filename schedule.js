const SECTION_1 = {
    emoji: "⚙️",
    title: "C++ Fundamentals, Electric Boogaloo",
    date: new Date(2026, 4 - 1, 10),
    slides: "https://docs.google.com/presentation/d/1T8Z-xBVbOV-_aRT3U9oAXFSjb6UE6OyW0DygfiutH38/edit?usp=sharing",
    handout: "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1266/section/section1/",
    miscLinks: {
        "Style Guide": "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1266/resources/style_guide"
    }
};

const SECTION_2 = {
    emoji: "🌀",
    title: "Recursion: The Big Ol' Leap of Faith",
    date: new Date(2026, 4 - 1, 17),
    slides: "https://docs.google.com/presentation/d/1oDVdx5kDBx8y8hrfkeuLqbdait489jimQZePQCkN3DU/edit?usp=sharing",
    handout: "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1266/section/section2/",
    miscLinks: {
        "ADT Reference Sheet": "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1266/exams/1-midterm/refsheet.pdf",
        "This page... :-)": ".",
        "Crows Know Recursion?!": "https://www.scientificamerican.com/article/crows-perform-yet-another-skill-once-thought-distinctively-human/"
    }
};

const SECTION_3 = {
    emoji: "🎒",
    title: "Dead Ends ~ Backpacking and Backtracking",
    date: new Date(2026, 4 - 1, 24),
    slides: "https://docs.google.com/presentation/d/1scGvj9VPZE6Ubq3111ABOltl5DzFkhyyygNHKM9i6JY/edit?usp=sharing",
    handout: "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1266/section/section3/",
    miscLinks: {
        "More on Knapsack": "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1252/lectures/12-backtracking2/slides",
        "Knapsack with Genetic Algorithms?!": "https://youtu.be/MacVqujSXWE",
        "Knapsack Solution": "./code/knapsack.zip"
    }
};

const SECTION_4 = {
    emoji: "🐼",
    title: "Types You Can Create?!",
    date: new Date(2026, 5 - 1, 1),
    slides: "https://docs.google.com/presentation/d/1iNgw5X3x7wVKUr1NLeLs_uUeoyq6MP-7zA0_kMbpfKg/edit?usp=sharing",
    handout: "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1266/section/section4/",
    miscLinks: {
    }
};

const SECTION_5 = {
    emoji: "☝️",
    title: "\"Thank you for the memories!\"",
    date: new Date(2026, 5 - 1, 8),
    slides: "https://docs.google.com/presentation/d/1va5uI8gVogtk1nMlRTHuTcq4G9xraQoQZjTWHV75ZiI/edit?usp=sharing",
    handout: "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1266/section/section5/",
    miscLinks: {
        "Pointers with Binky": "https://www.youtube.com/watch?v=5VnDaHBi8dM&pp=ygUWcG9pbnRlciBmdW4gd2l0aCBiaW5reQ%3D%3D"
    }
};

const SECTION_6 = {
    emoji: "🔗",
    title: "Linked Lists, aka Kurapika's Chains",
    date: new Date(2026, 5 - 1, 15),
    slides: "https://docs.google.com/presentation/d/1UdlK_g3Yk1cyd3eJOsu_4-fWNzoI_UaxDF0aIr8lnAY/edit?usp=sharing",
    handout: "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1266/section/section6",
    miscLinks: {
        "More Linked List Problems": "http://cslibrary.stanford.edu/103/"
    }
};

const SECTION_7 = {
    emoji: "🌴",
    title: "Trees, the 💖 of CS!",
    date: new Date(2026, 5 - 1, 22),
    slides: "https://docs.google.com/presentation/d/1NnqdX9vdI4-_cKMhOBpBb1xGoWYZFp52-GgNwFovULc/edit?usp=sharing",
    handout: "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1266/section/section7",
    miscLinks: {
    }
};

const SECTION_8 = {
    emoji: "🌟",
    title: "The Journey's End, The Journey Onward",
    date: new Date(2026, 5 - 1, 29),
    slides: "https://docs.google.com/presentation/d/1pwVQ4c6VjiMxyHxvzxMuR1feuw4JFsfl4eyBC6F8_ag/edit?usp=sharing",
    handout: "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1266/section/section8",
    miscLinks: {
        "Extra Practice": "./finale"
    }
};

// const section9 = {
//     emoji: "🌟",
//     title: "The Journey's End, The Journey Onward",
//     date: new Date(2026, 6 - 1, 5),
//     slides: "https://docs.google.com/presentation/d/1nwBY7148duq89oyxzqeKs5r0r7xqmbqYpJt3n5qBEKU/edit?usp=sharing",
//     handout: "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1266/section/section9/",
//     miscLinks: {
//         "Extra Practice": "./finale"
//     }
// };


const SECTIONS = [
    SECTION_1,
    SECTION_2,
    SECTION_3,
    SECTION_4,
    SECTION_5,
    SECTION_6,
    SECTION_7,
    SECTION_8,
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

setDivs(SECTIONS);

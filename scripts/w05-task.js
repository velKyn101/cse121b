/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.getElementById("temples");

let templeList = [];


/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach(temple => {
        // Create HTML elements
        const article = document.createElement('article');
        const heading = document.createElement('h3');
        const image = document.createElement('img');
    
        // Set templeName to the heading element
        heading.textContent = temple.templeName;
    
        // Set imageUrl to src attribute and location to alt attribute of image element
        image.src = temple.imageUrl;
        image.alt = temple.location;
    
        // Append heading and image elements to article element
        article.appendChild(heading);
        article.appendChild(image);
    
        // Append article element to templesElement
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    try 
    {
        const response = await fetch ("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

        templeList = await response.json();
        
        displayTemples(templeList);
    }
    catch (error)
    {
        console.error("error fetching temple data", error);
    }
}

/* reset Function */

const reset = () => {
    templesElement.innerHTML = '';
};

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();

    const filter = document.getElementById('filtered').value;

    switch (filter) {
        case 'utah':
            // Filter for temples located in Utah
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'notutah':
            // Filter for temples located outside Utah
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            // Filter for temples built before 1950
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
            // No filter, display all temples
            displayTemples(temples);
            break;
        default:
            // Handle unknown filter options
            console.error('Unknown filter option:', filter);
    }
};

getTemples();

/* Event Listener */

document.getElementById('filtered').addEventListener('change', () => {
    filterTemples(templeList);
});


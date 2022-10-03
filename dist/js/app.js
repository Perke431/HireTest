const dataActive = document.querySelector(".main-slider-images");
const dataImages = document.querySelectorAll('.main-slider-image');
const allCircles = document.querySelectorAll(".circle");
for (let i = 0; i < allCircles.length; i++) {
    const circle = allCircles[i];
    circle.addEventListener("click", () => {
        removeActive(allCircles, 'circle-active');
        if (dataActive) {
            dataActive.setAttribute("data-active", `${i + 1}`);
            circle.classList.add("circle-active");
        }
        ;
    });
}
function removeActive(arr, className) {
    arr.forEach(el => {
        el.classList.remove(className);
    });
}
const startValue = dataActive?.getAttribute('data-active');
const arrows = document.querySelectorAll('[data-move]');
arrows.forEach((arrow, id) => {
    arrow.addEventListener('click', () => {
        let current = Number(dataActive?.getAttribute('data-active'));
        if (current) {
            if (id === 1) {
                if (current + 1 > dataImages.length) {
                    current = Number(startValue);
                    dataActive?.setAttribute('data-active', `${current}`);
                    removeActive(allCircles, 'circle-active');
                    allCircles[current - 1].classList.add('circle-active');
                }
                else {
                    dataActive?.setAttribute('data-active', `${current + 1}`);
                    removeActive(allCircles, 'circle-active');
                    allCircles[current].classList.add('circle-active');
                }
            }
            else {
                if (current - 1 < Number(startValue)) {
                    current = dataImages.length;
                    dataActive?.setAttribute('data-active', `${current}`);
                    removeActive(allCircles, 'circle-active');
                    allCircles[current - 1].classList.add('circle-active');
                }
                else {
                    dataActive?.setAttribute('data-active', `${current - 1}`);
                    removeActive(allCircles, 'circle-active');
                    allCircles[current - 2].classList.add('circle-active');
                }
            }
        }
    });
});
const data = [
    {
        Country: 'Serbia',
        Name: 'Franchise',
        Phone: '140-764-7326',
        Address: '230 Wiza Freeway Suite 223',
    },
    {
        Country: 'Serbia',
        Name: 'Store',
        Phone: '275-202-9643',
        Address: '9551 Deckow Plain',
    },
    {
        Country: 'Serbia',
        Name: 'Small Dealers',
        Phone: '506-723-0447',
        Address: '5659 Predovic Ranch Suite 435',
    },
    {
        Country: 'Germany',
        Name: 'Franchise',
        Phone: '340-888-4907',
        Address: '90 Susan Isle Apt. 642',
    },
    {
        Country: 'Serbia',
        Name: 'Franchise',
        Phone: '729-373-7798',
        Address: '783 Pat Isle',
    },
    {
        Country: 'Germany',
        Name: 'Franchise',
        Phone: '717-987-7207',
        Address: '257 Lacy Roads',
    },
    {
        Country: 'Germany',
        Name: 'Store',
        Phone: '760-334-8328',
        Address: '90 Sam Keys Suite 335',
    },
    {
        Country: 'Serbia',
        Name: 'Small Dealers',
        Phone: '467-217-4968',
        Address: '85 Hyman Junction',
    },
    {
        Country: 'Serbia',
        Name: 'Franchise',
        Phone: '157-788-7205',
        Address: '3730 Nader Parks Apt. 833',
    },
    {
        Country: 'Serbia',
        Name: 'Small Dealers',
        Phone: '128-922-4783',
        Address: '010 Maximilian Forge',
    },
    {
        Country: 'Serbia',
        Name: 'Store',
        Phone: '537-145-2804',
        Address: '374 Beatty Locks',
    },
    {
        Country: 'Germany',
        Name: 'Store',
        Phone: '717-978-4320',
        Address: '369 Nedra Fort Apt. 829',
    },
];
const filterObject = {
    Country: [],
    Name: [],
};
const renderTable = () => {
    const tableEl = document.querySelector(".table-data-fields");
    if (!tableEl)
        return;
    const filteredItems = data.filter((x) => (filterObject.Country.includes(x.Country) ||
        filterObject.Country.length === 0) &&
        (filterObject.Name.includes(x.Name) || filterObject.Name.length === 0));
    const newDOM = createElement("div", { class: "table-data-fields" }, filteredItems.map((x) => createElement("div", { class: "table-data-field" }, [
        createElement("span", {}, [x.Country]),
        createElement("span", {}, [x.Name]),
        createElement("span", {}, [x.Phone]),
        createElement("span", {}, [x.Address]),
    ])));
    replaceNode(tableEl, newDOM);
};
const replaceNode = (root, el) => {
    root.replaceWith(el);
};
const createElement = (tag, attributes = {}, children = []) => {
    const x = document.createElement(tag);
    Object.keys(attributes).forEach((a) => {
        x.setAttribute(a, attributes[a]);
    });
    children.forEach((c) => {
        x.append(c);
    });
    return x;
};
document.querySelectorAll(".table-country-ctas button").forEach((x) => {
    x.addEventListener("click", () => {
        x.classList.contains('active') ? x.classList.remove('active') : x.classList.add('active');
        const value = String(x.textContent);
        const indexOfValue = filterObject.Country.indexOf(value);
        if (indexOfValue !== -1) {
            filterObject.Country.splice(indexOfValue, 1);
        }
        else {
            filterObject.Country.push(value);
        }
        renderTable();
    });
});
document.querySelectorAll(".table-names-ctas button").forEach((x) => {
    x.addEventListener("click", () => {
        x.classList.contains('active') ? x.classList.remove('active') : x.classList.add('active');
        const value = String(x.textContent);
        const indexOfValue = filterObject.Name.indexOf(value);
        if (indexOfValue !== -1) {
            filterObject.Name.splice(indexOfValue, 1);
        }
        else {
            filterObject.Name.push(value);
        }
        renderTable();
    });
});
renderTable();
//# sourceMappingURL=app.js.map
// Accordion Faq
const loadAccordion = () => {
    const faqs = document.querySelectorAll('.faq');

    console.log(faqs)

    faqs.forEach((faq) => {
        faq.addEventListener("click", () => {
            faq.classList.toggle("active");
        })
    });
}

loadAccordion();
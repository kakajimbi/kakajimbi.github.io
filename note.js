$(document).ready(function () {

    const comments = {
        question1: {
            no: "Atleast im loved in another way.",
            yes: "That's wonderful! .",
            maybe: "wdym maybe"
        },
        question2: {
            no: "Ha Ha Okay!",
            yes: "Can be Arranged.",
            maybe: "Eff You!."
        },
        question3: {
            no: "Ni By Force",
            yes: "Fantastic!.",
            maybe: "Get Your choices right."
        },
        question4: {
            no: "Offcourse You Dont.",
            yes: "Ik thats a lie! .",
            maybe: "Haga ii"
        },
        question5: {
            no: "Why Not!",
            yes: "Your Mom will kill You",
           
        }
       
        
    };

    // Listen for changes on radio buttons
    $('input[type="radio"]').on('change', function () {
        const questionName = $(this).attr('name'); // e.g., "question1"
        const value = $(this).val(); // e.g., "yes", "no", "maybe"
        const commentId = `#comment${questionName.slice(-1)}`; // Target comment element

        // Show the corresponding comment
        $(commentId).text(comments[questionName][value]).fadeIn();
    });
});

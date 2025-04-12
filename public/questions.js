const questions = [
    {
        question: "V jakém odvětví působíte",
        type: "select",
        answers: [
            { text: "Digitální infrastruktura a služby", value: 1},
            { text: "Drážní doprava", value: 0},
            { text: "Energetika - Elektřina"},
            { text: "Energetika - Plynárenství"},
            { text: "Energetika - Ropa a ropné produkty"},
            { text: "Energetika - Teplárenství"},
            { text: "Energetika - Vodík"},
            { text: "Finanční trh"},
            { text: "Chemický průmysl"},
            { text: "Letecká doprava"},
            { text: "Odpadové hospodářství"},
            { text: "Poštovní a kurýrní služby"},
            { text: "Potravinařský průmysl"},
            { text: "Silniční doprava"},
            { text: "Věda, výzkum a vzdělání"},
            { text: "Veřejná správa a výkon veřejné moci"},
            { text: "Vesmírný průmysl"},
            { text: "Vodní doprava"},
            { text: "Vodní hospodářství"},
            { text: "Vojenský průmysl"},
            { text: "Vodní průmysl"},
            { text: "Zdravotnictví"}
        ],
        evaluate: (answer, question) => {
            const selectedAnswer = question.answers.find(a => a.text === answer);
            return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
        }
    },

    //na zaklade prvni otazky -> otazka na sluzbu x < 13 <= 15 <y
    {
        question: "Jakou službu poskytujete",
        type: "select",
        dependsOn:{
            questionIndex: 0,
            value: "Digitální infrastruktura a služby"
        },
        answers: [
            {text: "Poskytování platformy sociální sítě",value: 1,
                nextQuestion:{
                    question: "Jste poskytovatelem sociální sítě",
                    type: "buttons",
                    answers: [
                        {text: "Ano", value: 8},
                        {text: "Ne", value: 0}
                    ],
                    evaluate: (answer, question) => { 
                        const selectedAnswer = question.answers.find(a => a.text === answer);
                        return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
                }
            }
            }, // bez add question nic, s add <250 nizsi, >250 vyssi
            
            {text: "Poskytování řízené bepečnostní služby", value: 1,
                nextQuestion:{
                    question: "Jste poskytovatelem řízené bezpečnosti",
                    type: "buttons",
                    answers: [
                        {text: "Ano", value: 8},
                        {text: "Ne", value: 0}
                    ],
                    evaluate: (answer, question) => {
                        const selectedAnswer = question.answers.find(a => a.text === answer);
                        return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
                    }
                }
            }, //bez add question nic, s add <250 nizsi, >250 vyssi
            
            {text: "Poskytování řízené služby", value: 0,
                nextQuestion:{
                    question: "Jste poskytovatelem řízené služby",
                    type: "buttons",
                    answers: [
                        {text: "Ano", value: 8},
                        {text: "Ne", value: 0}
                    ],
                    evaluate: (answer, question) => {
                        const selectedAnswer = question.answers.find(a => a.text === answer);
                        return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
                    }
                }
            }, // bez add question nic, s add <250 nizsi, >250 vyssi
            
            {text: "Poskytování služby cloud computingu", value: 1,
                nextQuestion:{
                    question: "Jste poskytovatel služby státního cloud computingu podle zákona o informačních systémech veřejné správy",
                    type: "buttons",
                    answers: [
                        {text: "Ano", value: 20},
                        {text: "Ne", value: 8}
                    ],
                    evaluate: (answer, question) => {
                        const selectedAnswer = question.answers.find(a => a.text === answer);
                        return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
                    }
                }
            }, // bez <250 nizsi >250 vyssi, s add vsechno vyssi

            {text: "Poskytování služby datového centra",value: 0,
                nextQuestion:{
                    question: "Jste poskytovatel služby datového centra (s výjimkou poskytovatele, který tuto službu poskytuje jako součást služby cloud computingu)?",
                    type: "buttons",
                    answers: [
                        {text: "Ano", value: 9},
                        {text: "Ne", value: 0}
                    ],
                    evaluate: (answer, question) => {
                        const selectedAnswer = question.answers.find(a => a.text === answer);
                        return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
                    }
                }
            }, //bez add question nic, s add <250 nizsi, >250 vyssi

            {text: "Poskytování služby internetového vyhledávače", value: 0,
                nextQuestion:{
                    question: "Jste poskytovatel služby internetového vyhledávače ve smyslu přímo použitelného právního předpisu Evropské unie? ",
                    type: "buttons",
                    answers: [
                        {text: "Ano", value: 8},
                        {text: "Ne", value: 0}
                    ],
                    evaluate: (answer, question) => {
                        const selectedAnswer = question.answers.find(a => a.text === answer);
                        return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
                    }
                } 
            }, //bez add question nic, s add <250 nizsi a taky >250 nizsi !!!!

            {text: "Poskytování služby on-line tržiště", value: 0,
                nextQuestion:{
                    question: "Jste poskytovatel služby on-line tržiště podle zákona upravujícího ochranu spotřebitele?",
                    type: "buttons",
                    answers: [
                        {text: "Ano", value: 8},
                        {text: "Ne", value: 0}
                    ],
                    evaluate: (answer, question) => {
                        const selectedAnswer = question.answers.find(a => a.text === answer);
                        return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
                    }
                } 
                
            }, //bez add question nic, s add <250 nizsi a taky >250 nizsi !!!!

            {text: "Poskytování služby sítě pro doručování obsahu",value: 0,
                nextQuestion:{
                    question: "Jste poskytovatel služby sítě pro doručování obsahu?",
                    type: "buttons",
                    answers: [
                        {text: "Ano", value: 9},
                        {text: "Ne", value: 0}
                    ],
                    evaluate: (answer, question) => {
                        const selectedAnswer = question.answers.find(a => a.text === answer);
                        return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
                    }
                } 
            }, //bez add question nic, s add <250 nizsi, >250 vyssi
            
            {text: "Poskytování služby systému překladu doménových jmen", value: 0,
                nextQuestion: {
                    question: "Jste poskytovatel služeb systému překladu doménových jmen a poskytujete autoritativní služby pro překlad jmen domén pro použití třetí stranou pro více než 10 000 domén druhého řádu? ",
                    type: "buttons",
                    answers: [
                        { text: "Ano", value: 20 },
                        { text: "Ne", value: 0 }
                    ],
                    evaluate: (answer, question) => {
                        const selectedAnswer = question.answers.find(a => a.text === answer);
                        return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
                    },
                    nextQuestion: { 
                        question: "Jste poskytovatel služeb systému překladu doménových jmen a aktivně poskytujete veřejně dostupné rekurzivní služby pro překlad jmen domén koncovým uživatelům internetu?",
                        type: "buttons",
                        answers: [
                            { text: "Ano", value: 20 },
                            { text: "Ne", value: 0 }
                        ],
                        evaluate: (answer, question) => {
                            const selectedAnswer = question.answers.find(a => a.text === answer);
                            return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
                        }
                    }
                }
            },//bez special nic, toto ma pouze special question, kde v obou pripdaech (jsou to ano questions) je vyssi

            {text: "Poskytování služby výměnného uzlu internetu", value: 0,
                nextQuestion:{
                    question: "Jste poskytovatel služby výměnného uzlu internetu?",
                    type: "buttons",
                    answers: [
                        {text: "Ano", value: 20},
                        {text: "Ne", value: 0}
                    ],
                    evaluate: (answer, question) => {
                        const selectedAnswer = question.answers.find(a => a.text === answer);
                        return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
                    }
                } 
            }, // opet special question bez ni nic, s ni vyssi

            {text: "Poskytování služby vytváření důvěry",value: 0,
                nextQuestion: { // První nextQuestion - na první doplňující otázku
                    question: "Jste kvalifikovaným poskytovatelem služby vytvářející důvěru?",
                    type: "buttons",
                    answers: [
                        { text: "Ano", value: 5 },
                        { text: "Ne", value: 0 }
                    ],
                    evaluate: (answer, question) => {
                        const selectedAnswer = question.answers.find(a => a.text === answer);
                        return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
                    },
                    nextQuestion: { // Druhý nextQuestion - na druhou doplňující otázku
                        question: "Jste poskytovatel služby vytvářející důvěru podle přímo použitelného předpisu Evropské unie ?",
                        type: "buttons",
                        answers: [
                            { text: "Ano", value: 13 },
                            { text: "Ne", value: 0 }
                        ],
                        evaluate: (answer, question) => {
                            const selectedAnswer = question.answers.find(a => a.text === answer);
                            return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
                        }
                    }
                }
            },// toto ma 2 special questions, bez nic, pokud plati prvni tak nic, pokud plati 2 tak u vsech po <250 nizsi pro > 250 vyssi, pokud plati obe tak vsechny pripady vyssi
            
            //big check here !
            {text: "Poskytování veřejně dostupné služby elektronických komunikací",value: 13,
                nextQuestion: { // První nextQuestion - na první doplňující otázku
                    question: "Jste poskytovatelem nejméně 100 000 aktivních pevných internetových přípojek na území České republiky?  ",
                    type: "buttons",
                    answers: [
                        { text: "Ano", value: 20 },
                        { text: "Ne", value: 0 }
                    ],
                    evaluate: (answer, question) => {
                        const selectedAnswer = question.answers.find(a => a.text === answer);
                        return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
                    },
                    nextQuestion: { // Druhý nextQuestion - na druhou doplňující otázku
                        question: "Jste poskytovatelem veřejně dostupné služby elektronických komunikací skrze nejméně 350 000 aktivních mobilních SIM karet na území České republiky?",
                        type: "buttons",
                        answers: [
                            { text: "Ano", value: 20 },
                            { text: "Ne", value: 0 }
                        ],
                        evaluate: (answer, question) => {
                            const selectedAnswer = question.answers.find(a => a.text === answer);
                            return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
                        }
                    }
                }
            },// ma opet 2 special questions, bez nich pro <50 jsou nizsi, potom od 250 vyssi, pokud plati 1 question tak u vsecho vyssi, to stejne u druhe a logicky obe vyssi


            {text: "Provozování Národního CERT",value: 0,
                nextQuestion:{
                    question: "Jste provozovatel národního CERT podle zákona o kybernetické bezpečnosti?  ",
                    type: "buttons",
                    answers: [
                        {text: "Ano", value: 20},
                        {text: "Ne", value: 0}
                    ],
                    evaluate: (answer, question) => {
                        const selectedAnswer = question.answers.find(a => a.text === answer);
                        return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
                    }
                } 
            },// pouze special otazka, pokud ne nic, pokud ano vyssi 

            {text: "Správa a provoz registru domény nejvyšší úrovně",value: 0,
                nextQuestion:{
                    question: "Jste subjekt spravující a provozující registr domény nejvyšší úrovně?  ",
                    type: "buttons",
                    answers: [
                        {text: "Ano", value: 20},
                        {text: "Ne", value: 0}
                    ],
                    evaluate: (answer, question) => {
                        const selectedAnswer = question.answers.find(a => a.text === answer);
                        return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
                    }
                } 
            }, // pouze special otazka, pokud ne nic, pokud ano vyssi 
            {text: "Správa kvalifikovaného systému elektronické identifikace",value: 0,
                nextQuestion:{
                    question: "Jste kvalifikovaný správce systému elektronické idenfikace podle zákona o elektronické identifikaci? ",
                    type: "buttons",
                    answers: [
                        {text: "Ano", value: 20},
                        {text: "Ne", value: 0}
                    ],
                    evaluate: (answer, question) => {
                        const selectedAnswer = question.answers.find(a => a.text === answer);
                        return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
                    }
                } 
            }, // pouze special otazka, pokud ne nic, pokud ano vyssi 

            {text: "Zajišťování veřejné komunikační",value: 13,
                nextQuestion: { // První nextQuestion - na první doplňující otázku
                    question: "Jste poskytovatelem nejméně 100 000 aktivních pevných internetových přípojek na území České republiky?    ",
                    type: "buttons",
                    answers: [
                        { text: "Ano", value: 20 },
                        { text: "Ne", value: 0 }
                    ],
                    evaluate: (answer, question) => {
                        const selectedAnswer = question.answers.find(a => a.text === answer);
                        return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
                    },
                    nextQuestion: { // Druhý nextQuestion - na druhou doplňující otázku
                        question: "Jste poskytovatelem veřejně dostupné služby elektronických komunikací skrze nejméně 350 000 aktivních mobilních SIM karet na území České republiky? ",
                        type: "buttons",
                        answers: [
                            { text: "Ano", value: 20 },
                            { text: "Ne", value: 0 }
                        ],
                        evaluate: (answer, question) => {
                            const selectedAnswer = question.answers.find(a => a.text === answer);
                            return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
                        }
                    }
                }
            } // ma 2 special otazky, bez nich <50 nizsi ostatni vyssi, pokud plati 1 otazka vse vyssi, stejne u druhe
        ],
        evaluate: (answer, question) => {
            const selectedAnswer = question.answers.find(a => a.text === answer);
            return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
        }
    },

    //oddeleni druhych otazek
    {
        question: "Kolik má vaše společnost zaměstnanců",
        type: "buttons",
        answers: [
            {text: "Méně jak 10 zaměstnanců", value: 0},
            {text: "Méně jak 50 zaměstnanců", value: 1},
            {text: "Méně jak 250 zaměstnanců",value: 2},
            {text: "Více jak 250 zaměstnanců",value: 3}  
        ],
        evaluate: (answer, question) => {
            const selectedAnswer = question.answers.find(a => a.text === answer);
            return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
        }
    },
    {
        question: "Jaký je váš roční obrat nebo suma bilanční rozvahy",
        type: "buttons",
        answers: [
            {text: "Obrat menší jak 2 miliony EUR", evaluate: 0},
            {text: "Obrat menší jak 10 milionů EUR", evaluate: 1},
            {text: "Obrat menší jak 50 milionů EUR nebo rozvaha menší jak 43 milionů EUR",value: 2},
            {text: "Obrat větší jak 50 milionů EUR nebo rozvaha větší jak 43 milionů EUR",value: 3}       
        ],
        evaluate: (answer, question) => {
            const selectedAnswer = question.answers.find(a => a.text === answer);
            return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
        }
    }

    
];
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

    //na zaklade prvni otazky -> otazka na sluzbu x <=11 <= 15 <y
    //Digitalni infrastruktura a sluzby
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
            }, // bez add question nic, s add <250 nizsi, >250 nizsi
            
            {text: "Poskytování řízené bepečnostní služby", value: 1,
                nextQuestion:{
                    question: "Jste poskytovatelem řízené bezpečnosti",
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
    },

    
    { //Drazni doprava
        question: "Jakou službu poskytujete",
        type: "select",
        dependsOn:{
            questionIndex: 0,
            value: "Drážní doprava"
        },
        answers: [
            {text: "Provoz celostátní dráhy",value: 1,
                nextQuestion:{
                    question: "Jste provozovatel celostátní dráhy podle zákona o drahách? ",
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
            }, //bez add nic, <250 nizsi, >250 vyssi

            {text: "Provoz drážní dopravy na celostátní dráze",value: 1,
                nextQuestion:{
                    question: "Jste provozovatelem drážní dopravy na celostátní dráze zákona o dráhách přičemž provádíte přepravu osob, věcí či zvířat nebo poskytujete trakci?  ",
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
            }, // bez add nic, s add <250 nizsi, >250 vyssi

            {text: "Provoz drážní dopravy na regionální dráze",value: 1,
                nextQuestion:{
                    question: "Jste provozovatelem drážní dopravy na celostátní dráze zákona o dráhách přičemž provádíte přepravu osob, věcí či zvířat nebo poskytujete trakci?  ",
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
            }, // bez add nic, s add <250 nizsi, >250 vyssi

            {text: "Provoz drážní dopravy na veřejně přístupné dráze",value: 1,
                nextQuestion:{
                    question: "Jste provozovatelemdrážní dopravy na veřejné přístupné vlečce podle zákona o dráhách přičemž provádíte přepravu osob, věcí či zvířat nebo poskytujete trakci?  ",
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
            }, // bez add nic, s add <250 nizsi, >250 vyssi

            {text: "Provoz regionální dráhy",value: 1,
                nextQuestion:{
                    question: "Jste provozovatel regionální dráhy podle zákona o drahách?",
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
            }, // bez add nic, s add <250 nizsi, >250 vyssi

            {text: "Provoz veřejně přístupné vlečky",value: 1,
                nextQuestion:{
                    question: "Jste provozovatel veřejně přístupné vlečkypodle zákona o dráhách?  ",
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
            }, // bez add nic, s add <250 nizsi, >250 vyssi

            {text: "Provoz zařízení služeb",value: 1,
                nextQuestion:{
                    question: "Jste provozovatel zařízení služeb podle zákona o dráhách?  ",
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
            }, // bez add nic, s add <250 nizsi, >250 vyssi

            {text: "Stavění vlakových cest",value: 0,
                nextQuestion:{
                    question: "Jste subjekt poskytující službu stavění vlakových cest na celostátní úrovni?  ",
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
            }, // bez add nic, s add <250 nizsi, >250 vyssi

            
        ],
    },

    {                //Energetika - Elektrina
        
        question: "Jakou službu poskytujete",
        type: "select",
        dependsOn:{
            questionIndex: 0,
            value: "Energetika - Elektřina"
            },
            answers: [
                {text: "Obchod s elektřinou",value: 1,
                    nextQuestion:{
                        question: "Jste držitel licence na obchod s elektřinou podle energetického zákona? ",
                        type: "buttons",
                        answers: [
                            {text: "Ano", value: 9},
                            {text: "Ne", value: 0}
                        ],
                        evaluate: (answer, question) => {
                            const selectedAnswer = question.answers.find(a => a.text === answer);
                            return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
                        },
                        nextQuestion:{
                            question: "Jaký je průměrný počet vašich odběrných a předávacích míst za poslední dostupný kalendářní rok? ",
                            type: "buttons",
                            answers: [
                                {text: "50 000 a více", value: 20},
                                {text: "Více než 10 000, ale méně než 50 000", value: 3},
                                {text: "Méně než 10 000", value: 0}
                            ],
                            evaluate: (answer, question) => {
                                const selectedAnswer = question.answers.find(a => a.text === answer);
                                return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
                            }
                        }
                    }
                }, //ma 2 add, bez add nic, pokud 1 ano <250 nizsi a >250 vyssi, pokud 2 otazka samotna tak nic, pokud obe a druha je 10 000 tak stejne jak kdyz prvni
                //pokud pokud ve 2 10-50 tak vse nizsi krome >250 a pokud 50 tak vsude vyssi

                {text: "Provoz distribuční soustavy elektřiny",value: 1,
                    nextQuestion:{
                        question: "Jste držitel licence na distribuci elektřiny podle energetického zákona? ",
                        type: "buttons",
                        answers: [
                            {text: "Ano", value: 9},
                            {text: "Ne", value: 0}
                        ],
                        evaluate: (answer, question) => {
                            const selectedAnswer = question.answers.find(a => a.text === answer);
                            return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
                        },
                        nextQuestion:{
                            question: "Jaká je celková přenosová kapacita vaší ditribuční soustavy?  ",
                            type: "buttons",
                            answers: [
                                {text: "220MW a více", value: 20},
                                {text: "Více než 120MW, ale méně než 220 MW", value: 3},
                                {text: "Méně než 120 MW", value: 0}
                            ],
                            evaluate: (answer, question) => {
                                const selectedAnswer = question.answers.find(a => a.text === answer);
                                return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
                            }
                        }
                    }
                },//ma 2 add, bez add nic, pokud 1 ano <250 nizsi a >250 vyssi, pokud 2 otazka samotna tak nic, pokud obe a druha je 10 000 tak stejne jak kdyz prvni
                //pokud pokud ve 2 10-50 tak vse nizsi krome >250 a pokud 50 tak vsude vyssi

                {text: "Provoz přenosové soustavy elektřiny",value: 0,
                    nextQuestion:{
                        question: "Jste držitel licence na přenos elektřiny podle energetického zákona?",
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
                }, //bez add nic, s vyssi

                {text: "Provoz veřejně přístupné dobíjecí stanice",value: 1,
                    nextQuestion:{
                        question: "Jste provozovatel veřejně přístupné dobíjecí stanice podle zákona o pohonných hmotách, který je odpovědný za správu a provoz dobíjecí stanice, která poskytuje službu dobíjení koncovým uživatelům, a to i jménem a na účet poskytovatele mobility?  ",
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
                }, //bez add nic, s ni pro <250 nizsi pro >250 vyssi ostatni nic

                {text: "Výkon činnosti agregace",value: 1,
                    nextQuestion:{
                        question: "Jste agregátor podle energetického zákona?  ",
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
                }, //bez add nic, s ni pro <250 nizsi pro >250 vyssi ostatni nic

                {text: "Výkon činnosti Elektroenergetického datového centra",value: 1,
                    nextQuestion:{
                        question: "Jste držitel licence na činnost Elektroenergetického datového centra podle energetického zákona?  ",
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
                }, //pouze special question s ni vyssi,bez ni nic

                {text: "Výkon činnosti nominovaného organizátora trhu s elektřinou",value: 1,
                    nextQuestion:{
                        question: "Jste držitel licence na činnosti operátora trhu podle energetického zákona?  ",
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
                }, //pouze special question s ni vyssi,bez ni nic

                {text: "Výkon činnosti odezvy strany poptávky",value: 1,
                    nextQuestion:{
                        question: "Jste provozovatel odezvy strany poptávky podle příslušného předpisu Evropské unie?   ",
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
                }, //bez add nic, s ni pro <250 nizsi pro >250 vyssi ostatni nic

                {text: "Výkon činnosti ukládání elektřiny",value: 1,
                    nextQuestion:{
                        question: "Jste držitel licence na ukládání elektřiny podle energetického zákona?  ",
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
                }, //bez add nic, s ni pro <250 nizsi pro >250 vyssi ostatni nic


                {text: "Výroba elektřiny",value: 1,
                    nextQuestion:{
                        question: "Jste držitel licence na výrobu elektřiny podle energetického zákona?  ",
                        type: "buttons",
                        answers: [
                            {text: "Ano", value: 9},
                            {text: "Ne", value: 0}
                        ],
                        evaluate: (answer, question) => {
                            const selectedAnswer = question.answers.find(a => a.text === answer);
                            return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
                        },
                        nextQuestion:{
                            question: "Jaká je celková přenosová kapacita vaší ditribuční soustavy?  ",
                            type: "buttons",
                            answers: [
                                {text: "100MW a více", value: 20},
                                {text: "Více než 50MW, ale méně než 100MW", value: 3},
                                {text: "Méně než 50 MW", value: 0}
                            ],
                            evaluate: (answer, question) => {
                                const selectedAnswer = question.answers.find(a => a.text === answer);
                                return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
                            }
                        }
                    }
                },//ma 2 add, bez add nic, pokud 1 ano <250 nizsi a >250 vyssi, pokud 2 otazka samotna tak nic, pokud obe a druha je 10 000 tak stejne jak kdyz prvni
                //pokud pokud ve 2 10-50 tak vse nizsi krome >250 a pokud 50 tak vsude vyssi
                

                

                

                

    
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
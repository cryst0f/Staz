export const questions = [
    {
    id: "industry",
      question: "V jakém odvětví působíte",
      type: "select",
      answers: [
            { text: "Digitální infrastruktura a služby"},
            { text: "Drážní doprava"},
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
            { text: "Výrobní průmysl"},
            { text: "Zdravotnictví"}
      ]
    },
    {
        question: "Jakou službu poskytujete",
        id: "service",
        type: "select",
        dependsOn: { id: "industry", value: "Digitální infrastruktura a služby" },
        answers: [
            {
                text: "Poskytování platformy sociální sítě",
                id: "social",
                nextQuestion: {
                    question: "Jste poskytovatel platformy sociální sítě?",
                    id: "socialAdd",
                    type: "buttons",
                    answers: [
                        { text: "Ano" },
                        { text: "Ne" }
                    ]
                }
            },
            {
                text: "Poskytování řízené bezpečnostní služby",
                id: "safe",
                nextQuestion: {
                    question: "Jste poskytovatel řízené bezpečnostní služby?",
                    id: "safeAdd",
                    type: "buttons",
                    answers: [
                        { text: "Ano" },
                        { text: "Ne" }
                    ]
                }
            },
            { text: "Poskytování řízené služby",
                id: "manageAdd",
                nextQuestion: {
                    question: "Jste poskytovatel řízené služby",
                    id: "manageAdd",
                    type: "buttons",
                    answers: [
                        { text: "Ano" },
                        { text: "Ne" }
                    ]
                }
             },

            { text: "Poskytování služby cloud computingu",
                id: "cloud",
                nextQuestion: {
                    question: "Jste poskytovatel služby státního cloud computingu podle zákona o informačních systémech veřejné správy",
                    id: "cloudAdd",
                    type: "buttons",
                    answers: [
                        { text: "Ano" },
                        { text: "Ne" }
                    ]
                }
            },
            { text: "Poskytování služby datového centra",
                id: "dataCenter",
                nextQuestion: {
                    question: "Jste poskytovatel služby datového centra (s výjimkou poskytovatele, který tuto službu poskytuje jako součást služby cloud computingu)",
                    type: "buttons",
                    id: "dataCenterAdd",
                    answers: [
                        { text: "Ano" },
                        { text: "Ne" }
                    ]
                }
             },
            { text: "Poskytování služby internetového vyhledávače",
                id: "netSearch",
                nextQuestion: {
                    question: "Jste poskytovatel služby internetového vyhledávače ve smyslu přímo použitelného právního předpisu Evropské unie",
                    id: "netSearchAdd",
                    type: "buttons",
                    answers: [
                        { text: "Ano" },
                        { text: "Ne" }
                    ]
                }
            },
            { text: "Poskytování služby on-line tržiště",
                id: "onlineMarket",
                nextQuestion: {
                    question: "Jste poskytovatel služby on-line tržiště podle zákona upravujícího ochranu spotřebitele",
                    id: "onlineMarketAdd",
                    type: "buttons",
                    answers: [
                        { text: "Ano" },
                        { text: "Ne" }
                    ]
                }
             },
            { text: "Poskytování služby sítě pro doručování obsahu",
                id: "contentDelivery",
                nextQuestion: {
                    question: "Jste poskytovatel služby sítě pro doručování obsahu",
                    id: "contentDeliveryAdd",
                    type: "buttons",
                    answers: [
                        { text: "Ano" },
                        { text: "Ne" }
                    ]
                }
            },
            { text: "Poskytování služby systému překladu doménových jmen",
                id:"domain",
                nextQuestion: {
                    question: "Jste poskytovatel služeb systému překladu doménových jmen a poskytujete autoritativní služby pro překlad jmen domén pro použití třetí stranou pro více než 10 000 domén druhého řádu? ",
                    id:"domainAdd1",
                    type: "buttons",
                    answers: [
                        {
                            text: "Ano",
                            nextQuestion: { 
                                question: "Aktivně poskytujete veřejně dostupné rekurzivní služby pro překlad jmen domén koncovým uživatelům internetu?",
                                id:"domainAdd2",
                                type: "buttons",
                                answers: [
                                    { text: "Ano" },
                                    { text: "Ne" }
                                ]
                            }
                        },
                        { text: "Ne",
                            nextQuestion: { 
                                question: "Aktivně poskytujete veřejně dostupné rekurzivní služby pro překlad jmen domén koncovým uživatelům internetu?",
                                id:"domainAdd2",
                                type: "buttons",
                                answers: [
                                    { text: "Ano" },
                                    { text: "Ne" }
                                ]
                            }
                         }
                    ]
                }
            },
            { text: "Poskytování služby výměnného uzlu internetu",
                id: "nodeExchange",
                nextQuestion: {
                    question: "Jste poskytovatel služby výměnného uzlu internetu",
                    id: "nodeExchangeAdd",
                    type: "buttons",
                    answers: [
                        { text: "Ano" },
                        { text: "Ne" }
                    ]
                }
            },
            { text: "Poskytování služby vytváření důvěry",
                id: "trustService",
                nextQuestion: {
                    question: "Jste kvalifikovaným poskytovatelem služby vytvářející důvěru",
                    id: "trustServiceAdd1",
                    type: "buttons",
                    answers: [
                        {
                            text: "Ano",
                            nextQuestion: { 
                                question: "Jste poskytovatel služby vytvářející důvěru podle přímo použitelného předpisu Evropské unie",
                                id: "trustServiceAdd2",
                                type: "buttons",
                                answers: [
                                    { text: "Ano" },
                                    { text: "Ne" }
                                ]
                            }
                        },
                        { text: "Ne",
                            nextQuestion: { 
                                question: "Jste poskytovatel služby vytvářející důvěru podle přímo použitelného předpisu Evropské unie",
                                id: "trustServiceAdd2",
                                type: "buttons",
                                answers: [
                                    { text: "Ano" },
                                    { text: "Ne" }
                                ]
                            }
                         }
                    ]
                }
            },
            { text: "Poskytování veřejně dostupné služby elektronických komunikací",
                id: "electronicCommunication",
                nextQuestion: {
                    question: "Jste poskytovatelem nejméně 100 000 aktivních pevných internetových přípojek na území České republiky",
                    id: "electronicCommunicationAdd1",
                    type: "buttons",
                    answers: [
                        {
                            text: "Ano",
                            nextQuestion: { 
                                question: "Jste poskytovatelem veřejně dostupné služby elektronických komunikací skrze nejméně 350 000 aktivních mobilních SIM karet na území České republiky",
                                id: "electronicCommunicationAdd2",
                                type: "buttons",
                                answers: [
                                    { text: "Ano" },
                                    { text: "Ne" }
                                ]
                            }
                        },
                        { text: "Ne",
                            nextQuestion: { 
                                question: "Jste poskytovatelem veřejně dostupné služby elektronických komunikací skrze nejméně 350 000 aktivních mobilních SIM karet na území České republiky",
                                id: "electronicCommunicationAdd2",
                                type: "buttons",
                                answers: [
                                    { text: "Ano" },
                                    { text: "Ne" }
                                ]
                            }
                         }
                    ]
                }
            },
            { text: "Provozování Národního CERT",
                id: "nationalCert",
                nextQuestion: {
                    question: "Jste provozovatel národního CERT podle zákona o kybernetické bezpečnosti",
                    type: "buttons",
                    id: "nationalCertAdd",
                    answers: [
                        { text: "Ano" },
                        { text: "Ne" }
                    ]
                }
            },
            { text: "Správa a provoz registru domény nejvyšší úrovně",
                id: "domainRegistry",
                nextQuestion: {
                    question: "Jste subjekt spravující a provozující registr domény nejvyšší úrovně",
                    id: "domainRegistryAdd",
                    type: "buttons",
                    answers: [
                        { text: "Ano" },
                        { text: "Ne" }
                    ]
                }
            },
            { text: "Správa kvalifikovaného systému elektronické identifikace",
                id: "electronicIdentification",
                nextQuestion: {
                    question: "Jste kvalifikovaný správce systému elektronické idenfikace podle zákona o elektronické identifikaci",
                    id: "electronicIdentificationAdd",
                    type: "buttons",
                    answers: [
                        { text: "Ano" },
                        { text: "Ne" }
                    ]
                }
            },
            { text: "Zajišťování veřejné komunikační sítě",
                id: "communicationNetwork",
                nextQuestion: {
                    question: "Jste poskytovatelem nejméně 100 000 aktivních pevných internetových přípojek na území České republiky",
                    id: "communicationNetworkAdd1",
                    type: "buttons",
                    answers: [
                        {
                            text: "Ano",
                            nextQuestion: { 
                                question: "Jste poskytovatelem veřejně dostupné služby elektronických komunikací skrze nejméně 350 000 aktivních mobilních SIM karet na území České republiky",
                                id: "communicationNetworkAdd2",
                                type: "buttons",
                                answers: [
                                    { text: "Ano" },
                                    { text: "Ne" }
                                ]
                            }
                        },
                        { text: "Ne",
                            nextQuestion: { 
                                question: "Jste poskytovatelem veřejně dostupné služby elektronických komunikací skrze nejméně 350 000 aktivních mobilních SIM karet na území České republiky",
                                id: "communicationNetworkAdd2",
                                type: "buttons",
                                answers: [
                                    { text: "Ano" },
                                    { text: "Ne" }
                                ]
                            }
                         }
                    ]
                }
             }
        ],

    },
    {
    //Drazni doprava
        question: "Jakou službu poskytujete",
        type: "select",
        id: "rail-service",
        dependsOn: { id: "industry", value: "Drážní doprava" },
        answers: [

            {   
                text: "Provoz celostátní dráhy",
                id: "nationalRailwayService",
                nextQuestion: {
                    question: "Jste provozovatel celostátní dráhy podle zákona o drahách",
                    id: "nationalRailwayServiceAdd",
                    type: "buttons",
                    answers: [
                        { text: "Ano" },
                        { text: "Ne" }
                    ]
                }
            },

            { text: "Provoz drážní dopravy na celostátní dráze",
                id: "nationalRailwayTransport",
                nextQuestion: {
                    question: "Jste kvalifikovaný správce systému elektronické idenfikace podle zákona o elektronické identifikaci",
                    id: "nationalRailwayTransportAdd",
                    type: "buttons",
                    answers: [
                        { text: "Ano" },
                        { text: "Ne" }
                    ]
                }
            },

            { text: "Provoz drážní dopravy na regionální dráze",
                id: "regionalRailwayTransport",
                nextQuestion: {
                    question: "Jste provozovatelem drážní dopravy na regionální dráze podle zákona o dráhách přičemž provádíte přepravu osob, věcí či zvířat nebo poskytujete trakci",
                    id: "regionalRailwayTransportAdd",
                    type: "buttons",
                    answers: [
                        { text: "Ano" },
                        { text: "Ne" }
                    ]
                }
            },

            { text: "Provoz drážní dopravy na veřejně přístupné vlečce",
                id: "publicSiding",
                nextQuestion: {
                    question: "Jste provozovatelem drážní dopravy na veřejné přístupné vlečce podle zákona o dráhách přičemž provádíte přepravu osob, věcí či zvířat nebo poskytujete trakci",
                    id: "publicSidingAdd",
                    type: "buttons",
                    answers: [
                        { text: "Ano" },
                        { text: "Ne" }
                    ]
                }
            },

            { text: "Provoz regionální dráhy",
                id: "regionalRail",
                nextQuestion: {
                    question: "Jste provozovatel regionální dráhy podle zákona o drahách",
                    id: "regionalRailAdd",
                    type: "buttons",
                    answers: [
                        { text: "Ano" },
                        { text: "Ne" }
                    ]
                }
            },

            { text: "Provoz veřejně přístupné vlečky",
                id: "operatingPublicSiding",
                nextQuestion: {
                    question: "Jste provozovatel veřejně přístupné vlečkypodle zákona o dráhách",
                    id: "operatingPublicSidingAdd",
                    type: "buttons",
                    answers: [
                        { text: "Ano" },
                        { text: "Ne" }
                    ]
                }
            },

            { text: "Provoz zařízení služeb",
                id: "operatingServiceFacil",
                nextQuestion: {
                    question: "Jste provozovatel zařízení služeb podle zákona o dráhách",
                    id: "operatingServiceFacilAdd",
                    type: "buttons",
                    answers: [
                        { text: "Ano" },
                        { text: "Ne" }
                    ]
                }
            },

            { text: "Stavění vlakových cest",
                id: "railwayBuild",
                nextQuestion: {
                    question: "Jste subjekt poskytující službu stavění vlakových cest na celostátní úrovni",
                    id: "railwayBuildAdd",
                    type: "buttons",
                    answers: [
                        { text: "Ano" },
                        { text: "Ne" }
                    ]
                }
            },
        ]
    },

    {
        //Energetika - elektrina
            question: "Jakou službu poskytujete",
            type: "select",
            id: "energetic-electricity",
            dependsOn: { id: "industry", value: "Energetika - Elektřina" },
            answers: [
                {   
                    text: "Obchod s elektřinou",
                    id: "electronicShop",
                    nextQuestion: {
                        question: "Jste držitel licence na obchod s elektřinou podle energetického zákona",
                        id: "electronicShopAdd1",
                        type: "buttons",
                        answers: [
                            { text: "Ano",
                                nextQuestion: { 
                                    question: "Jaký je průměrný počet vašich odběrných a předávacích míst za poslední dostupný kalendářní rok",
                                    id: "electronicShopAdd2",
                                    type: "buttons",
                                    answers: [
                                        { text: "50 000 a více" },
                                        { text: "10 000 a více, ale méně než 50 000" },
                                        { text: "Méně než 10 000" },
                                    ]
                                }
                             },
                            { text: "Ne",
                                nextQuestion: { 
                                    question: "Jaký je průměrný počet vašich odběrných a předávacích míst za poslední dostupný kalendářní rok",
                                    id: "electronicShopAdd2",
                                    type: "buttons",
                                    answers: [
                                        { text: "50 000 a více" },
                                        { text: "10 000 a více, ale méně než 50 000" },
                                        { text: "Méně než 10 000" },
                                    ]
                                }
                             },
                        ]
                    }
                },

                {   
                    text: "Provoz distribuční soustavy elektřiny",
                    id: "serviceElectronicDistribution",
                    nextQuestion: {
                        question: "Jste držitel licence na distribuci elektřiny podle energetického zákona",
                        id: "serviceElectronicDistributionAdd1",
                        type: "buttons",
                        answers: [
                            { text: "Ano",
                                nextQuestion: { 
                                    question: "Jaká je celková přenosová kapacita vaší ditribuční soustavy",
                                    id: "serviceElectronicDistributionAdd2",
                                    type: "buttons",
                                    answers: [
                                        { text: "220 MW a více" },
                                        { text: "120 MW a více, ale méně než 220 MW" },
                                        { text: "Méně než 120 MW" },
                                    ]
                                }
                            },
                            { text: "Ne",
                                nextQuestion: { 
                                    question: "Jaká je celková přenosová kapacita vaší ditribuční soustavy",
                                    id: "serviceElectronicDistributionAdd2",
                                    type: "buttons",
                                    answers: [
                                        { text: "220 MW a více" },
                                        { text: "120 MW a více, ale méně než 220 MW" },
                                        { text: "Méně než 120 MW" },
                                    ]
                                }
                            },
                        ]
                    }
                },

                { text: "Provoz přenosové soustavy elektřiny",
                    id: "serviceTransmissionElectricity",
                    nextQuestion: {
                        question: "Jste držitel licence na přenos elektřiny podle energetického zákona",
                        id: "operationTransmissionElectricityAdd",
                        type: "buttons",
                        answers: [
                            { text: "Ano" },
                            { text: "Ne" }
                        ]
                    }
                },

                { text: "Provoz veřejně přístupné dobíjecí stanice",
                    id: "servicePowerStation",
                    nextQuestion: {
                        question: "Jste provozovatel veřejně přístupné dobíjecí stanice podle zákona o pohonných hmotách, který je odpovědný za správu a provoz dobíjecí stanice, která poskytuje službu dobíjení koncovým uživatelům, a to i jménem a na účet poskytovatele mobility",
                        id: "servicePowerStationAdd",
                        type: "buttons",
                        answers: [
                            { text: "Ano" },
                            { text: "Ne" }
                        ]
                    }
                },

                { text: "Výkon činnosti agregace",
                    id: "performaceAgregation",
                    nextQuestion: {
                        question: "Jste agregátor podle energetického zákona",
                        id: "performaceAgregationAdd",
                        type: "buttons",
                        answers: [
                            { text: "Ano" },
                            { text: "Ne" }
                        ]
                    }
                },

                { text: "Výkon činnosti Elektroenergetického datového centra",
                    id: "performanceDataCentre",
                    nextQuestion: {
                        question: "Jste držitel licence na činnost Elektroenergetického datového centra podle energetického zákona",
                        id: "performanceDataCentreAdd",
                        type: "buttons",
                        answers: [
                            { text: "Ano" },
                            { text: "Ne" }
                        ]
                    }
                },

                { text: "Výkon činnosti nominovaného organizátora trhu s elektřinou",
                    id: "performanceNominatedElectricity",
                    nextQuestion: {
                        question: "Jste držitel licence na činnosti operátora trhu podle energetického zákona",
                        id: "performanceNominatedElectricityAdd",
                        type: "buttons",
                        answers: [
                            { text: "Ano" },
                            { text: "Ne" }
                        ]
                    }
                },

                { text: "Výkon činnosti odezvy strany poptávky",
                    id: "performanceDemandResponse",
                    nextQuestion: {
                        question: "Jste provozovatel odezvy strany poptávky podle příslušného předpisu Evropské unie",
                        id: "performanceDemandResponseAdd",
                        type: "buttons",
                        answers: [
                            { text: "Ano" },
                            { text: "Ne" }
                        ]
                    }
                },

                { text: "Výkon činnosti ukládání elektřiny",
                    id: "performanceSavingElectricity",
                    nextQuestion: {
                        question: "Jste držitel licence na ukládání elektřiny podle energetického zákona",
                        id: "performanceSavingElectricityAdd",
                        type: "buttons",
                        answers: [
                            { text: "Ano" },
                            { text: "Ne" }
                        ]
                    }
                },

                { text: "Výroba elektřiny",
                    id: "electricityProduction",
                    nextQuestion: {
                        question: "Jste držitel licence na výrobu elektřiny podle energetického zákona",
                        id: "electricityProductionAdd1",
                        type: "buttons",
                        answers: [
                            { text: "Ano",
                                nextQuestion: { 
                                    question: "Jaký je celkový instalovaný elektrický výkon výrobny, kterou disponujete",
                                    id: "electricityProductionAdd2",
                                    type: "buttons",
                                    answers: [
                                        { text: "100 MW a více" },
                                        { text: "50 MW a více, ale méně než 100 MW" },
                                        { text: "Méně než 50 MW" },
                                    ]
                                }
                             },
                            { text: "Ne",
                                nextQuestion: { 
                                    question: "Jaký je celkový instalovaný elektrický výkon výrobny, kterou disponujete",
                                    id: "electricityProductionAdd2",
                                    type: "buttons",
                                    answers: [
                                        { text: "100 MW a více" },
                                        { text: "50 MW a více, ale méně než 100 MW" },
                                        { text: "Méně než 50 MW" },
                                    ]
                                }
                             }
                        ]
                    }
                },
            
            
        ]
    },

    {
        //Energetika - Plynárenství
            question: "Jakou službu poskytujete",
            type: "select",
            id: "energetic-gas",
            dependsOn: { id: "industry", value: "Energetika - Plynárenství" },
            answers: [
    
                {   
                    text: "Obchod s plynem",
                    id: "gasTrade",
                    nextQuestion: {
                        question: "Jste držitel licence na obchod s plynem podle energetického zákona",
                        id: "gasTradeAdd",
                        type: "buttons",
                        answers: [
                            { text: "Ano" },
                            { text: "Ne" }
                        ]
                    }
                },

                {   
                    text: "Provoz distribuční soustavy plynu",
                    id: "operationGasDistro",
                    nextQuestion: {
                        question: "Jste držitel licence na distribuci plynu podle energetického zákona",
                        id: "operationGasDistroAdd",
                        type: "buttons",
                        answers: [
                            { text: "Ano" },
                            { text: "Ne" }
                        ]
                    }
                },

                {   
                    text: "Provoz přepravní soustavy plynu",
                    id: "operationGasDistroTrans",
                    nextQuestion: {
                        question: "Jste držitel licence na přepravu plynu podle energetického zákona",
                        id: "operationGasDistroTransAdd",
                        type: "buttons",
                        answers: [
                            { text: "Ano" },
                            { text: "Ne" }
                        ]
                    }
                },

                {   
                    text: "Uskladňování plynu",
                    id: "storingGas",
                    nextQuestion: {
                        question: "Jste držitel licence na uskladňování plynu podle energetického zákona",
                        id: "storingGasAdd1",
                        type: "buttons",
                        answers: [
                            { text: "Ano",
                                nextQuestion: { 
                                    question: "Provozujete podzemní zásobník plynu s projektovanou instalovanou kapacitou nejméně 200 mil. m³",
                                    id: "storingGasAdd2",
                                    type: "buttons",
                                    answers: [
                                        { text: "Ano" },
                                        { text: "Ne" },
                                    ]
                                }
                             },
                            { text: "Ne",
                                nextQuestion: { 
                                    question: "Provozujete podzemní zásobník plynu s projektovanou instalovanou kapacitou nejméně 200 mil. m³",
                                    id: "storingGasAdd2",
                                    type: "buttons",
                                    answers: [
                                        { text: "Ano" },
                                        { text: "Ne" },
                                    ]
                                }
                             }
                        ]
                    }
                },

                {   
                    text: "Výroba plynu",
                    id: "gasProduction",
                    nextQuestion: {
                        question: "Jste držitel licence na výrobu plynu podle energetického zákona",
                        id: "gasProductionAdd",
                        type: "buttons",
                        answers: [
                            { text: "Ano" },
                            { text: "Ne" }
                        ]
                    }
                },
            ]
    },
        

    {
    //Energetika - ropa a ropne produkty
        question: "Jakou službu poskytujete",
        type: "select",
        id: "Energetic-petrol",
        dependsOn: { id: "industry", value: "Energetika - Ropa a ropné produkty" },
        answers: [

            {   
                text: "Provoz čerpací stanice pohonných hmot",
                id: "gasStationService",
                nextQuestion: {
                    question: "Jste provozovatel čerpací stanice podle zákona o pohonných hmotách a provozujete alespoň 100 čerpacích stanic na území České republiky? ",
                    id: "gasStationServiceAdd",
                    type: "buttons",
                    answers: [
                        { text: "Ano" },
                        { text: "Ne" }
                    ]
                }
            },

            {   
                text: "Provoz produktovodu",
                id: "productionPipelineService",
                nextQuestion: {
                    question: "Jste provozovatel produktovodu",
                    id: "productionPipelineServiceAdd",
                    type: "buttons",
                    answers: [
                        { text: "Ano" },
                        { text: "Ne" }
                    ]
                }
            },
            
            {   
                text: "Provoz ropovodu",
                id: "pipelineService",
                nextQuestion: {
                    question: "Jste provozovatel ropovodu",
                    id: "pipelineServiceAdd",
                    type: "buttons",
                    answers: [
                        { text: "Ano" },
                        { text: "Ne" }
                    ]
                }
            },

            {   
                    text: "Provoz skladovacího zařízení",
                    id: "serviceStorageFacility",
                    nextQuestion: {
                        question: "Jste provozovatel skladovacího zařízení pro skladování ropy",
                        id: "serviceStorageFacilityAdd1",
                        type: "buttons",
                        answers: [
                            { text: "Ano",
                                nextQuestion: { 
                                    question: "Disponujete zásobníkem nebo komplexem zásobníků s celkovou kapacitou nejméně 40 000 m³",
                                    id: "serviceStorageFacilityAdd2",
                                    type: "buttons",
                                    answers: [
                                        { text: "Ano" },
                                        { text: "Ne" },
                                    ]
                                }
                             },
                            { text: "Ne",
                                nextQuestion: { 
                                    question: "Disponujete zásobníkem nebo komplexem zásobníků s celkovou kapacitou nejméně 40 000 m³",
                                    id: "serviceStorageFacilityAdd2",
                                    type: "buttons",
                                    answers: [
                                        { text: "Ano" },
                                        { text: "Ne" },
                                    ]
                                }
                             },
                        ]
                    }
                },

                {   
                text: "Těžba ropy",
                id: "oilProduction",
                nextQuestion: {
                    question: "Jste provozovatel zařízení na těžbu ropy",
                    id: "oilProductionAdd",
                    type: "buttons",
                    answers: [
                        { text: "Ano" },
                        { text: "Ne" }
                    ]
                }
            },

                {   
                text: "Výkon činnosti ústředního správce zásob",
                id: "performaceStockholding",
                nextQuestion: {
                    question: "Jste ústřední správce zásob podle zákona o nouzových zásobách ropy",
                    id: "performaceStockholdingAdd",
                    type: "buttons",
                    answers: [
                        { text: "Ano" },
                        { text: "Ne" }
                    ]
                }
            },

            {   
                text: "Zpracovávání ropy",
                id: "oilProcessing",
                nextQuestion: {
                    question: "Jste provozovatel zařízení na zpracování ropy",
                    id: "oilProcessingAdd",
                    type: "buttons",
                    answers: [
                        { text: "Ano" },
                        { text: "Ne" }
                    ]
                }
            },

            

            
        ]
    },

    {
        //Drazni doprava
            question: "Jakou službu poskytujete",
            type: "select",
            id: "energetic-heating",
            dependsOn: { id: "industry", value: "Energetika - Teplárenství" },
            answers: [
    
                {   
                    text: "Provoz soustavy zásobování tepelnou energií",
                    id: "operatingHeatSupply",
                    nextQuestion: {
                        question: "Jste držitel licence na rozvod tepelné energie podle energetického zákona",
                        id: "operatingHeatSupplyAdd1",
                        type: "buttons",
                        answers: [
                            { text: "Ano",
                                nextQuestion: { 
                                    question: "Disponujete soustavou zásobování tepelnou energií s celkovou přenosovou kapacitou nejméně 160 MW",
                                    id: "operatingHeatSupplyAdd2",
                                    type: "buttons",
                                    answers: [
                                        { text: "Ano" },
                                        { text: "Ne" },
                                    ]
                                }
                             },
                            { text: "Ne",
                                nextQuestion: { 
                                    question: "Disponujete soustavou zásobování tepelnou energií s celkovou přenosovou kapacitou nejméně 160 MW",
                                    id: "operatingHeatSupplyAdd2",
                                    type: "buttons",
                                    answers: [
                                        { text: "Ano" },
                                        { text: "Ne" },
                                    ]
                                }
                             }
                        ]
                    }
                },

                {   
                    text: "Výroba tepelné energie",
                    id: "productionHeatSupply",
                    nextQuestion: {
                        question: "Jste držitel licence na výrobu tepelné energie podle energetického zákona",
                        id: "productionHeatSupplyAdd1",
                        type: "buttons",
                        answers: [
                            { text: "Ano",
                                nextQuestion: { 
                                    question: "Disponujete zdrojem tepelné energie s celkovým instalovaným tepelným výkonem nejméně 200 MW",
                                    id: "productionHeatSupplyAdd2",
                                    type: "buttons",
                                    answers: [
                                        { text: "Ano" },
                                        { text: "Ne" },
                                    ]
                                }
                             },
                            { text: "Ne",
                                nextQuestion: { 
                                    question: "Disponujete zdrojem tepelné energie s celkovým instalovaným tepelným výkonem nejméně 200 MW",
                                    id: "productionHeatSupplyAdd2",
                                    type: "buttons",
                                    answers: [
                                        { text: "Ano" },
                                        { text: "Ne" },
                                    ]
                                }
                             }
                        ]
                    }
                },
            ]
        },

        {
            //Energetika - Vodík
                question: "Jakou službu poskytujete",
                type: "select",
                id: "energetic-hydrogen",
                dependsOn: { id: "industry", value: "Energetika - Vodík" },
                answers: [
                    {   
                        text: "Přeprava vodíku",
                        id: "heliumTransport",
                        nextQuestion: {
                            question: "Jste subjekt zajišťující přepravu vodíku",
                            id: "heliumTransportAdd",
                            type: "buttons",
                            answers: [
                                { text: "Ano" },
                                { text: "Ne" }
                            ]
                        }
                    },

                    {   
                        text: "Skladování vodíku",
                        id: "heliumStoring",
                        nextQuestion: {
                            question: "Jste subjekt zajišťující skladování vodíku",
                            id: "heliumStoringAdd",
                            type: "buttons",
                            answers: [
                                { text: "Ano" },
                                { text: "Ne" }
                            ]
                        }
                    },

                    {   
                        text: "Výroba vodíku",
                        id: "heliumProductions",
                        nextQuestion: {
                            question: "Jste výrobce vodíku",
                            id: "heliumProductionsAdd",
                            type: "buttons",
                            answers: [
                                { text: "Ano" },
                                { text: "Ne" }
                            ]
                        }
                    },
                ]
        },

        {
            //Finanční trh
                question: "Jakou službu poskytujete",
                type: "select",
                id: "financial-market",
                dependsOn: { id: "industry", value: "Finanční trh" },
                answers: [
                    {   
                        text: "Provoz obchodního systému",
                        id: "operationTradingSystem",
                        nextQuestion: {
                            question: "Jste provozovatel obchodního systému podle zákona o podnikání na kapitálovém trhu",
                            id: "operationTradingSystemAdd",
                            type: "buttons",
                            answers: [
                                { text: "Ano" },
                                { text: "Ne" }
                            ]
                        }
                    },

                    {   
                        text: "Výkon činnosti instituce elektronických peněz",
                        id: "performanceElectronicMoney",
                        nextQuestion: {
                            question: "Jste instituce elektronických peněz podle zákona o platebním styku",
                            id: "performanceElectronicMoneyAdd1",
                            type: "buttons",
                            answers: [
                                { text: "Ano",
                                    nextQuestion: { 
                                        question: "Přesahuje váš roční průměrný objem vydaných elektronických peněz za dobu předchozích tří kalendářních let částku odpovídající 20 000 000 000 EUR",
                                        id: "performanceElectronicMoneyAdd2",
                                        type: "buttons",
                                        answers: [
                                            { text: "Ano" },
                                            { text: "Ne" },
                                        ]
                                    }
                                 },
                                { text: "Ne",
                                    nextQuestion: { 
                                        question: "Přesahuje váš roční průměrný objem vydaných elektronických peněz za dobu předchozích tří kalendářních let částku odpovídající 20 000 000 000 EUR",
                                        id: "performanceElectronicMoneyAdd2",
                                        type: "buttons",
                                        answers: [
                                            { text: "Ano" },
                                            { text: "Ne" },
                                        ]
                                    }
                                 }
                            ]
                        }
                    },

                    {   
                        text: "Výkon činnosti platební instituce",
                        id: "performancePaymentInstitution",
                        nextQuestion: {
                            question: "Jste platební instituce podle zákona o platebním styku",
                            id: "performancePaymentInstitutionAdd1",
                            type: "buttons",
                            answers: [
                                { text: "Ano",
                                    nextQuestion: { 
                                        question: "Přesahuje váš roční průměrný objem provedených platebních transakcí za dobu předchozích tří kalendářních let částku odpovídající 40 000 000 000 EUR",
                                        id: "performancePaymentInstitutionAdd2",
                                        type: "buttons",
                                        answers: [
                                            { text: "Ano" },
                                            { text: "Ne" },
                                        ]
                                    }
                                 },
                                { text: "Ne",
                                    nextQuestion: { 
                                        question: "Přesahuje váš roční průměrný objem provedených platebních transakcí za dobu předchozích tří kalendářních let částku odpovídající 40 000 000 000 EUR",
                                        id: "performancePaymentInstitutionAdd2",
                                        type: "buttons",
                                        answers: [
                                            { text: "Ano" },
                                            { text: "Ne" },
                                        ]
                                    }
                                 }
                            ]
                        }
                    },


                    {   
                        text: "Výkon činnosti ústřední protistrany",
                        id: "performanceCentralCounterparty",
                        nextQuestion: {
                            question: "Jste ústřední protistrana podle přímo použitelného předpisu Evropské unie",
                            id: "performanceCentralCounterpartyAdd",
                            type: "buttons",
                            answers: [
                                { text: "Ano" },
                                { text: "Ne" }
                            ]
                        }
                    },

                    {   
                        text: "Výkon činnosti úvěrové instituce",
                        id: "performanceCreditInstitution",
                        nextQuestion: {
                            question: "Jste úvěrová instituce podle přímo použitelného předpisu Evropské unie",
                            id: "performanceCreditInstitutionAdd",
                            type: "buttons",
                            answers: [
                                { text: "Ano" },
                                { text: "Ne" }
                            ]
                        }
                    },
                ]
        },

        {
        //Chemický průmysl
        question: "Jakou službu poskytujete",
        type: "select",
        id: "chemical-industry",
        dependsOn: { id: "industry", value: "Chemický průmysl" },
        answers: [

            {   
                text: "Distribuce chemických látek podléhajících registraci",
                id: "chemicalsDistribution",
                nextQuestion: {
                    question: "Jste distributor nebezpečných látek v množství stejném nebo větším, než je množství uvedené v příloze č. 1 k zákonu o prevenci závažných havárií v sloupci 3 tabulky I nebo II",
                    id: "chemicalsDistributionAdd1",
                    type: "buttons",
                    answers: [
                        { text: "Ano",
                            nextQuestion: { 
                                question: "Jste distributor nebezpečných látek v množství stejném nebo větším, než je množství uvedené v příloze č. 1 k zákonu o prevenci závažných havárií v sloupci 2 tabulky I nebo II",
                                id: "chemicalsDistributionAdd2",
                                type: "buttons",
                                answers: [
                                    { text: "Ano" },
                                    { text: "Ne" },
                                ]
                            }
                         },
                        { text: "Ne",
                            nextQuestion: { 
                                question: "Jste distributor nebezpečných látek v množství stejném nebo větším, než je množství uvedené v příloze č. 1 k zákonu o prevenci závažných havárií v sloupci 2 tabulky I nebo II",
                                id: "chemicalsDistributionAdd2",
                                type: "buttons",
                                answers: [
                                    { text: "Ano" },
                                    { text: "Ne" },
                                ]
                            }
                         }
                    ]
                }
            },

            {   
                text: "Užívání objektu za účelem umístění nebezpečné látky",
                id: "buildingForPlacingDangerousSubstance",
                nextQuestion: {
                    question: "Jste provozovatel objektu zařazeného do skupiny B podle zákona o prevenci závažných havárií",
                    id: "buildingForPlacingDangerousSubstanceAdd1",
                    type: "buttons",
                    answers: [
                        { text: "Ano",
                            nextQuestion: { 
                                question: "Jste provozovatel objektu zařazeného do skupiny A podle zákona o prevenci závažných havárií",
                                id: "buildingForPlacingDangerousSubstanceAdd2",
                                type: "buttons",
                                answers: [
                                    { text: "Ano" },
                                    { text: "Ne" },
                                ]
                            }
                         },
                        { text: "Ne",
                            nextQuestion: { 
                                question: "Jste provozovatel objektu zařazeného do skupiny A podle zákona o prevenci závažných havárií",
                                id: "buildingForPlacingDangerousSubstanceAdd2",
                                type: "buttons",
                                answers: [
                                    { text: "Ano" },
                                    { text: "Ne" },
                                ]
                            }
                         }
                    ]
                }
            },

            {   
                text: "Výroba chemických látek podléhajících registraci",
                id: "manufactureChemicals",
                nextQuestion: {
                    question: "Jste výrobce nebezpečných látek v množství stejném nebo větším, než je množství uvedené v příloze č. 1 k zákonu o prevenci závažných havárií v sloupci 3 tabulky I nebo II",
                    id: "manufactureChemicalsAdd1",
                    type: "buttons",
                    answers: [
                        { text: "Ano",
                            nextQuestion: { 
                                question: "Jste výrobce nebezpečných látek v množství stejném nebo větším, než je množství uvedené v příloze č. 1 k zákonu o prevenci závažných havárií v sloupci 2 tabulky I nebo II",
                                id: "manufactureChemicalsAdd2",
                                type: "buttons",
                                answers: [
                                    { text: "Ano" },
                                    { text: "Ne" },
                                ]
                            }
                         },
                        { text: "Ne",
                            nextQuestion: { 
                                question: "Jste výrobce nebezpečných látek v množství stejném nebo větším, než je množství uvedené v příloze č. 1 k zákonu o prevenci závažných havárií v sloupci 2 tabulky I nebo II",
                                id: "manufactureChemicalsAdd2",
                                type: "buttons",
                                answers: [
                                    { text: "Ano" },
                                    { text: "Ne" },
                                ]
                            }
                         }
                    ]
                }
            },

            {   
                text: "Výroba předmětů z látek podléhajících registraci",
                id: "manufactureArticlesFromSubstances",
                nextQuestion: {
                    question: "Jste výrobce předmětů z nebezpečných látek v množství stejném nebo větším, než je množství uvedené v příloze č. 1 k zákonu o prevenci závažných havárií v sloupci 3 tabulky I nebo II",
                    id: "manufactureArticlesFromSubstancesAdd1",
                    type: "buttons",
                    answers: [
                        { text: "Ano",
                            nextQuestion: { 
                                question: "Jste výrobce nebezpečných látek v množství stejném nebo větším, než je množství uvedené v příloze č. 1 k zákonu o prevenci závažných havárií v sloupci 2 tabulky I nebo II",
                                id: "manufactureArticlesFromSubstancesAdd2",
                                type: "buttons",
                                answers: [
                                    { text: "Ano" },
                                    { text: "Ne" },
                                ]
                            }
                         },
                        { text: "Ne",
                            nextQuestion: { 
                                question: "Jste výrobce předmětů z nebezpečných látek v množství stejném nebo větším, než je množství uvedené v příloze č. 1 k zákonu o prevenci závažných havárií v sloupci 2 tabulky I nebo II",
                                id: "manufactureArticlesFromSubstancesAdd2",
                                type: "buttons",
                                answers: [
                                    { text: "Ano" },
                                    { text: "Ne" },
                                ]
                            }
                         }
                    ]
                }
            },
        ]
    },

    {
        //Letecká doprava
            question: "Jakou službu poskytujete",
            type: "select",
            id: "air-transport",
            dependsOn: { id: "industry", value: "Letecká doprava" },
            answers: [
    
                {   
                    text: "Bezpečnostní kontrola týkající se nákladu nebo poštovních zásilek",
                    id: "securityChecksCargo",
                    nextQuestion: {
                        question: "Jste schválený agent podle přímo použitelného předpisu Evropské unie",
                        id: "securityChecksCargoAdd",
                        type: "buttons",
                        answers: [
                            { text: "Ano" },
                            { text: "Ne" }
                        ]
                    }
                },

                {   
                    text: "Letové navigační služby",
                    id: "airNavigationService",
                    nextQuestion: {
                        question: "Jste poskytovatel letových navigačních služeb podle přímo použitelného předpisu Evropské unie, ale nejste provozovatelem služby řízení letového provozu v převážné části vzdušného prostoru České republiky",
                        id: "airNavigationServiceAdd1",
                        type: "buttons",
                        answers: [
                            { text: "Ano",
                                nextQuestion: { 
                                    question: "Jste určeným a osvědčeným poskytovatelem meteorologických služeb podle přímo použitelného předpisu Evropské unie s působností pro poskytování meteorologických informací pro potřeby letectví v celé České republice",
                                    id: "airNavigationServiceAdd2",
                                    type: "buttons",
                                    answers: [
                                        { text: "Ano" },
                                        { text: "Ne" },
                                    ]
                                }
                             },
                            { text: "Ne",
                                nextQuestion: { 
                                    question: "Jste určeným a osvědčeným poskytovatelem meteorologických služeb podle přímo použitelného předpisu Evropské unie s působností pro poskytování meteorologických informací pro potřeby letectví v celé České republice",
                                    id: "airNavigationServiceAdd2",
                                    type: "buttons",
                                    answers: [
                                        { text: "Ano" },
                                        { text: "Ne" },
                                    ]
                                }
                             }
                        ]
                    }
                },

                {   
                    text: "Provoz letecké dopravy",
                    id: "airTransportOperations",
                    nextQuestion: {
                        question: "Jste letecký dopravce podle zákona o civilním letectví",
                        id: "airTransportOperationsAdd1",
                        type: "buttons",
                        answers: [
                            { text: "Ano",
                                nextQuestion: { 
                                    question: "Přepravili jste za předchozí 3 kalendářní roky průměrně alespoň 500 000 cestujících ročně",
                                    id: "airTransportOperationsAdd2",
                                    type: "buttons",
                                    answers: [
                                        { text: "Ano" },
                                        { text: "Ne" },
                                    ]
                                }
                             },
                            { text: "Ne",
                                nextQuestion: { 
                                    question: "Přepravili jste za předchozí 3 kalendářní roky průměrně alespoň 500 000 cestujících ročně",
                                    id: "airTransportOperationsAdd2",
                                    type: "buttons",
                                    answers: [
                                        { text: "Ano" },
                                        { text: "Ne" },
                                    ]
                                }
                             }
                        ]
                    }
                },

                {   
                    text: "Provoz letiště",
                    id: "airportOperations",
                    nextQuestion: {
                        question: "Jste provozovatel mezinárodního letiště podle zákona o civilním letectví s dočasným či trvalým vyhrazeným bezpečnostním prostorem podle přímo použitelného předpisu Evropské unie",
                        id: "airportOperationsAdd1",
                        type: "buttons",
                        answers: [
                            { text: "Ano",
                                nextQuestion: { 
                                    question: "Odbavili jste za předchozí 3 kalendářní roky průměrně alespoň 150 000 cestujících ročně",
                                    id: "airportOperationsAdd2",
                                    type: "buttons",
                                    answers: [
                                        { text: "Ano" },
                                        { text: "Ne" },
                                    ]
                                }
                             },
                            { text: "Ne",
                                nextQuestion: { 
                                    question: "Odbavili jste za předchozí 3 kalendářní roky průměrně alespoň 150 000 cestujících ročně",
                                    id: "airportOperationsAdd2",
                                    type: "buttons",
                                    answers: [
                                        { text: "Ano" },
                                        { text: "Ne" },
                                    ]
                                }
                             }
                        ]
                    }
                },

                {   
                    text: "Provoz pomocných zařízení v rámci letiště",
                    id: "operationSupportDevicesAirport",
                    nextQuestion: {
                        question: "Jste provozovatel pomocných zařízení v rámci mezinárodního letiště podle zákona o civilním letectví s dočasným či trvalým vyhrazeným bezpečnostním prostorem podle přímo použitelného předpisu Evropské unie",
                        id: "operationSupportDevicesAirportAdd",
                        type: "buttons",
                        answers: [
                            { text: "Ano" },
                            { text: "Ne" }
                        ]
                    }
                },

                {   
                    text: "Služba dodávek palubních zásob",
                    id: "onboardDeliveryService",
                    nextQuestion: {
                        question: "Jste schválený dodavatel palubních zásob podle přímo použitelného předpisu Evropské unie",
                        id: "onboardDeliveryServiceAdd",
                        type: "buttons",
                        answers: [
                            { text: "Ano" },
                            { text: "Ne" }
                        ]
                    }
                },

                {   
                    text: "Služba odesílání nákladu nebo poštovních zásilek",
                    id: "freightMailService",
                    nextQuestion: {
                        question: "Jste známý odesílatel podle přímo použitelného předpisu Evropské unie",
                        id: "freightMailServiceAdd",
                        type: "buttons",
                        answers: [
                            { text: "Ano" },
                            { text: "Ne" }
                        ]
                    }
                },

                {   
                    text: "Služba při odbavovacím procesu",
                    id: "checkinService",
                    nextQuestion: {
                        question: "Jste poskytovatel služby při odbavovacím procesu na letišti podle zákona o civilním letectví",
                        id: "checkinServiceAdd",
                        type: "buttons",
                        answers: [
                            { text: "Ano" },
                            { text: "Ne" }
                        ]
                    }
                },

                {   
                    text: "Služba řízení letového provozu ve vzdušném prostoru České republiky",
                    id: "airControlCzechRep",
                    nextQuestion: {
                        question: "Jste provozovatel služby řízení letového provozu v převážné části vzdušného prostoru České republiky podle přímo použitelného předpisu Evropské unie",
                        id: "airControlCzechRepAdd",
                        type: "buttons",
                        answers: [
                            { text: "Ano" },
                            { text: "Ne" }
                        ]
                    }
                },
            ]
        },

        {
            //Odpadové hospodářství
                question: "Jakou službu poskytujete",
                type: "select",
                id: "waste-management",
                dependsOn: { id: "industry", value: "Odpadové hospodářství" },
                answers: [
        
                    {   
                        text: "Obchodování s odpadem",
                        id: "wasteTrading",
                        nextQuestion: {
                            question: "Jste obchodník s odpady podle zákona o odpadech",
                            id: "wasteTradingAdd",
                            type: "buttons",
                            answers: [
                                { text: "Ano" },
                                { text: "Ne" }
                            ]
                        }
                    },

                    {   
                        text: "Provoz zařízení určeného pro nakládání s odpady",
                        id: "operationWasteManagement",
                        nextQuestion: {
                            question: "Jste provozovatel zařízení určeného pro nakládání s odpady podle zákona o odpadech",
                            id: "operationWasteManagementAdd",
                            type: "buttons",
                            answers: [
                                { text: "Ano" },
                                { text: "Ne" }
                            ]
                        }
                    },

                    {   
                        text: "Přeprava odpadu",
                        id: "wasteTransport",
                        nextQuestion: {
                            question: "Jste dopravce odpadu podle zákona o odpadech",
                            id: "wasteTransportAdd",
                            type: "buttons",
                            answers: [
                                { text: "Ano" },
                                { text: "Ne" }
                            ]
                        }
                    },

                    {   
                        text: "Zprostředkování nakládání s odpadem",
                        id: "wasteManagementMediation",
                        nextQuestion: {
                            question: "Jste dopravce odpadu podle zákona o odpadech",
                            id: "wasteManagementMediationAdd",
                            type: "buttons",
                            answers: [
                                { text: "Ano" },
                                { text: "Ne" }
                            ]
                        }
                    },
                ]
        },

        {
            //Poštovní a kurýrní služby
                question: "Jakou službu poskytujete",
                type: "select",
                id: "courier-service",
                dependsOn: { id: "industry", value: "Poštovní a kurýrní služby" },
                answers: [{   
                    text: "Poskytování poštovní a kurýrní služby",
                    id: "postalAndCourierServices",
                    nextQuestion: {
                        question: "Jste provozovatel poštovní služby podle zákona o poštovních službách",
                        id: "postalAndCourierServicesAdd1",
                        type: "buttons",
                        answers: [
                            { text: "Ano",
                                nextQuestion: { 
                                    question: "Jste poskytovatel kurýrní služby podle přímo použitelného předpisu Evropské unie a poskytujete alespoň jeden z kroků v poštovním řetězci",
                                    id: "postalAndCourierServicesAdd2",
                                    type: "buttons",
                                    answers: [
                                        { text: "Ano" },
                                        { text: "Ne" },
                                    ]
                                }
                             },
                            { text: "Ne",
                                nextQuestion: { 
                                    question: "Jste poskytovatel kurýrní služby podle přímo použitelného předpisu Evropské unie a poskytujete alespoň jeden z kroků v poštovním řetězci",
                                    id: "postalAndCourierServicesAdd2",
                                    type: "buttons",
                                    answers: [
                                        { text: "Ano" },
                                        { text: "Ne" },
                                    ]
                                }
                             }
                        ]
                    }
                },

        ]
    },

    {
        //Potravinařský průmysl
            question: "Jakou službu poskytujete",
            type: "select",
            id: "food-service",
            dependsOn: { id: "industry", value: "Potravinařský průmysl" },
            answers: [
    
                {   
                    text: "Distribuce potravin",
                    id: "foodDistribution",
                    nextQuestion: {
                        question: "Jste potravinářský podnik podle přímo použitelného předpisu Evropské unie, který se zabývá velkoobchodní distribucí potravin",
                        id: "foodDistributionAdd",
                        type: "buttons",
                        answers: [
                            { text: "Ano" },
                            { text: "Ne" }
                        ]
                    }
                },

                {   
                    text: "Výroba potravin",
                    id: "foodProduction",
                    nextQuestion: {
                        question: "Jste potravinářský podnik podle přímo použitelného předpisu Evropské unie, který se zabývá průmyslovou výrobou potravin",
                        id: "foodProductionAdd",
                        type: "buttons",
                        answers: [
                            { text: "Ano" },
                            { text: "Ne" }
                        ]
                    }
                },

                {   
                    text: "Zpracování potravin",
                    id: "foodProcessing",
                    nextQuestion: {
                        question: "Jste potravinářský podnik podle přímo použitelného předpisu Evropské unie, který se zabývá průmyslovým zpracováním potravin",
                        id: "foodProcessingAdd",
                        type: "buttons",
                        answers: [
                            { text: "Ano" },
                            { text: "Ne" }
                        ]
                    }
                },
            ]
    },

    {
        //Silniční doprava
            question: "Jakou službu poskytujete",
            type: "select",
            id: "road-transport",
            dependsOn: { id: "industry", value: "Silniční doprava" },
            answers: [
    
                {   
                    text: "Činnost subjektu odpovědného za kontrolu řízení provozu",
                    id: "trafficManagementControl",
                    nextQuestion: {
                        question: "Jste subjekt vykonávající správu pozemní komunikace podle zákona o pozemních komunikacích",
                        id: "trafficManagementControlAdd",
                        type: "buttons",
                        answers: [
                            { text: "Ano" },
                            { text: "Ne" }
                        ]
                    }
                },

                {   
                    text: "Provoz inteligentního dopravního systému",
                    id: "operationIntelligentTransportSystem",
                    nextQuestion: {
                        question: "Jste poskytovatel služby inteligentního dopravního systému podle zákona o pozemních komunikacích",
                        id: "operationIntelligentTransportSystemAdd",
                        type: "buttons",
                        answers: [
                            { text: "Ano" },
                            { text: "Ne" }
                        ]
                    }
                },
            ]
        },

        {
            //Věda, výzkum a vzdělání
                question: "Jakou službu poskytujete",
                type: "select",
                id: "science-research-education",
                dependsOn: { id: "industry", value: "Věda, výzkum a vzdělání" },
                answers: [
                    {   
                    text: "Provozování velké výzkumné infrastruktury",
                    id: "operatingLargeResearchInfrastracture",
                    nextQuestion: {
                        question: "Jste konsorcium evropské výzkumné infrastruktury",
                        id: "operatingLargeResearchInfrastractureAdd1",
                        type: "buttons",
                        answers: [
                            { text: "Ano",
                                nextQuestion: { 
                                    question: "Jste hostitelská nebo partnerská instituce velké výzkumné infrastruktury",
                                    id: "operatingLargeResearchInfrastractureAdd2",
                                    type: "buttons",
                                    answers: [
                                        { text: "Ano" },
                                        { text: "Ne" },
                                    ]
                                }
                             },
                            { text: "Ne",
                                nextQuestion: { 
                                    question: "Jste hostitelská nebo partnerská instituce velké výzkumné infrastruktury",
                                    id: "operatingLargeResearchInfrastractureAdd2",
                                    type: "buttons",
                                    answers: [
                                        { text: "Ano" },
                                        { text: "Ne" },
                                    ]
                                }
                             }
                        ]
                    }
                },

                {   
                    text: "Výzkum a vývoj",
                    id: "researchAndDevelopment",
                    nextQuestion: {
                        question: "Jste výzkumná organizace podle přímo použitelného předpisu Evropské unie, veřejná výzkumná instituce nebo vysoká škola",
                        id: "researchAndDevelopmentAdd1",
                        type: "buttons",
                        answers: [
                            { text: "Ano",
                                nextQuestion: { 
                                    question: "Provádíte citlivou výzkumnou činnost",
                                    id: "researchAndDevelopmentAdd2",
                                    type: "buttons",
                                    answers: [
                                        { text: "Ano",
                                            nextQuestion: { 
                                                question: "Patří váš obor do aplikovaného výzkumu a vývoje podle Struktury oborů FORD",
                                                id: "researchAndDevelopmentAdd3",
                                                type: "buttons",
                                                answers: [
                                                    { text: "Ano" },
                                                    { text: "Ne" },
                                                ]
                                            }
                                         },
                                        { text: "Ne",
                                            nextQuestion: { 
                                                question: "Patří váš obor do aplikovaného výzkumu a vývoje podle Struktury oborů FORD",
                                                id: "researchAndDevelopmentAdd3",
                                                type: "buttons",
                                                answers: [
                                                    { text: "Ano" },
                                                    { text: "Ne" },
                                                ]
                                            }
                                         },
                                    ]
                                }
                             },
                            { text: "Ne",
                                nextQuestion: { 
                                    question: "Provádíte citlivou výzkumnou činnost",
                                    id: "researchAndDevelopmentAdd2",
                                    type: "buttons",
                                    answers: [
                                        { text: "Ano",
                                            nextQuestion: { 
                                                question: "Patří váš obor do aplikovaného výzkumu a vývoje podle Struktury oborů FORD",
                                                id: "researchAndDevelopmentAdd3",
                                                type: "buttons",
                                                answers: [
                                                    { text: "Ano" },
                                                    { text: "Ne" },
                                                ]
                                            }
                                         },
                                        { text: "Ne",
                                            nextQuestion: { 
                                                question: "Patří váš obor do aplikovaného výzkumu a vývoje podle Struktury oborů FORD",
                                                id: "researchAndDevelopmentAdd3",
                                                type: "buttons",
                                                answers: [
                                                    { text: "Ano" },
                                                    { text: "Ne" },
                                                ]
                                            }
                                         },
                                    ]
                                }
                             }
                        ]
                    }
                },

                
            ]
        },

        {
            //Veřejná správa a výkon veřejné moci
            question: "Jakou službu poskytujete",
            type: "select",
            id: "public-administration",
            dependsOn: { id: "industry", value: "Veřejná správa a výkon veřejné moci" },
            answers: [

            {   
                text: "Výkon svěřených pravomocí",
                id: "entrustedPower",
                nextQuestion: {
                    question: "Vyberte orgán či instituci",
                    id: "entrustedPowerAdd",
                    type: "select",
                    answers:  [
                            { text: "Akademii věd České republiky"},
                            { text: "Česká národní banka" },
                            { text: "Generální inspekce bezpečnostních sborů"},
                            { text: "Generální ředitelství Hasičského záchranného sboru" },
                            { text: "Hlavní město Praha" },
                            { text: "Kancelář Poslanecké sněmovny" },
                            { text: "Kancelář prezidenta republiky"},
                            { text: "Kancelář Senátu" },
                            { text: "Kancelář Veřejného ochránce práv" },
                            { text: "Kraj"},
                            { text: "Krajské ředitelství Hasičského záchranného sboru" },
                            { text: "Městská část hlavního města Prahy, na kterou byl přenesen výkon působnosti dle zákona o hlavním městě Praze" },
                            { text: "Nejvyšší kontrolní úřad"},
                            { text: "Obec s rozšířenou působností" },
                            { text: "Orgán soudní moci"},
                            { text: "Policejní prezidium"},
                            { text: "Profesní komora (nevztahuje se na regionální struktury profesních komor)" },
                            { text: "Správa úložišť radioaktivních odpadů"},
                            { text: "Státní zastupitelství"},
                            { text: "Úřád pro zastupování státu ve věcech majetkových"},
                            { text: "Ústřední orgán státní správy"},
                            { text: "Útvar policie s celostátní působností"},
                            { text: "Územně dekoncentrovaný (specializovaný) orgán státní správy"},
                            { text: "Vysoká škola"},
                            { text: "Zdravotní pojišťovna"},
                            { text: "Jiný správní úřad s celostátní působností, a to včetně ústředí a generálního ředitelství územně dekoncentrovaných (specializovaných) orgánů státní správy"},
                            { text: "Jiný orgán nebo osoba"},
                            
                            
                            
                            
                        ]
                    }
                },
            ]
        },

        {
            //Vesmírný průmysl
                question: "Jakou službu poskytujete",
                type: "select",
                id: "space-industry",
                dependsOn: { id: "industry", value: "Vesmírný průmysl" },
                answers: [
        
                    {   
                        text: "Zajištění podpory poskytování služeb využívajících kosmického prostoru",
                        id: "spaceSupportService",
                        nextQuestion: {
                            question: "Jste provozovatel pozemní infrastruktury využívané pro podporu poskytování služeb využívajících kosmického prostoru a zároveň nezajišťujete tuto službu podpory jako podnikatel zajišťující službu nebo síť elektronických komunikací podle zákona o elektronických komunikacích",
                            id: "spaceSupportServiceAdd",
                            type: "buttons",
                            answers: [
                                { text: "Ano" },
                                { text: "Ne" }
                            ]
                        }
                    }
                ]    
            },

            {
                //Vodní doprava
                    question: "Jakou službu poskytujete",
                    type: "select",
                    id: "water-transport",
                    dependsOn: { id: "industry", value: "Vodní doprava" },
                    answers: [
            
                        {   
                            text: "Provoz řídícího orgánu přístavu nebo provoz díla nebo zařízení v rámci přístavu",
                            id: "portOrWorkAuthority",
                            nextQuestion: {
                                question: "Jste řídící orgán přístavu podle příslušného předpisu Evropské unie nebo subjekt provozující dílo nebo zařízení v rámci přístavů",
                                id: "portOrWorkAuthorityAdd",
                                type: "buttons",
                                answers: [
                                    { text: "Ano" },
                                    { text: "Ne" }
                                ]
                            }
                        },

                        {   
                            text: "Provoz služby lodní dopravě (VTS)",
                            id: "operationVesselTrafic",
                            nextQuestion: {
                                question: "Jste provozovatel služby lodní dopravě (VTS) podle příslušného předpisu Evropské unie",
                                id: "operationVesselTraficAdd",
                                type: "buttons",
                                answers: [
                                    { text: "Ano" },
                                    { text: "Ne" }
                                ]
                            }
                        },

                        {   
                            text: "Výkon činnosti námořní vodní dopravy",
                            id: "operationWaterTransport",
                            nextQuestion: {
                                question: "Jste subjekt vykonávající činnost námořní vodní dopravy podle přímo použitelného předpisu Evropské unie",
                                id: "operationWaterTransportAdd",
                                type: "buttons",
                                answers: [
                                    { text: "Ano" },
                                    { text: "Ne" }
                                ]
                            }
                        },
                    ]
                },
                //Vodní hospodářství
                {
                        question: "Jakou službu poskytujete",
                        type: "select",
                        id: "water-management",
                        dependsOn: { id: "industry", value: "Vodní hospodářství" },
                        answers: [
                            {   
                                text: "Provozování kanalizace",
                                id: "operationSewerageSystem",
                                nextQuestion: {
                                    question: "Jste provozovatel kanalizace podle zákona o vodovodech a kanalizacích",
                                    id: "operationSewerageSystemAdd1",
                                    type: "buttons",
                                    answers: [
                                        { text: "Ano",
                                            nextQuestion: { 
                                                question: "Poskytovali jste v předchozích 3 kalendářních letech služby odvádění nebo čištění odpadních vod průměrně alespoň 50 000 obyvatel",
                                                id: "operationSewerageSystemAdd2",
                                                type: "buttons",
                                                answers: [
                                                    { text: "Ano" },
                                                    { text: "Ne" },
                                                ]
                                            }
                                         },
                                        { text: "Ne",
                                            nextQuestion: { 
                                                question: "Poskytovali jste v předchozích 3 kalendářních letech služby odvádění nebo čištění odpadních vod průměrně alespoň 50 000 obyvatel",
                                                id: "operationSewerageSystemAdd2",
                                                type: "buttons",
                                                answers: [
                                                    { text: "Ano" },
                                                    { text: "Ne" },
                                                ]
                                            }
                                         }
                                    ]
                                }
                            },

                            {   
                                text: "Provozování vodovodu",
                                id: "operationWaterSupplySystem",
                                nextQuestion: {
                                    question: "Jste provozovatel vodovodu podle zákona o vodovodech a kanalizacích",
                                    id: "operationWaterSupplySystemAdd1",
                                    type: "buttons",
                                    answers: [
                                        { text: "Ano",
                                            nextQuestion: { 
                                                question: "Zásobovali jste v předchozích 3 kalendářních letech pitnou vodou průměrně alespoň 50 000 obyvatel",
                                                id: "operationWaterSupplySystemAdd2",
                                                type: "buttons",
                                                answers: [
                                                    { text: "Ano" },
                                                    { text: "Ne" },
                                                ]
                                            }
                                         },
                                        { text: "Ne",
                                            nextQuestion: { 
                                                question: "Zásobovali jste v předchozích 3 kalendářních letech pitnou vodou průměrně alespoň 50 000 obyvatel",
                                                id: "operationWaterSupplySystemAdd2",
                                                type: "buttons",
                                                answers: [
                                                    { text: "Ano" },
                                                    { text: "Ne" },
                                                ]
                                            }
                                         }
                                    ]
                                }
                            },
                             
                        ]
                    },

                    {
                        //Vojenský průmysl
                            question: "Jakou službu poskytujete",
                            type: "select",
                            id: "military-industry",
                            dependsOn: { id: "industry", value: "Vojenský průmysl" },
                            answers: [ 
                                {   
                                    text: "Obchod s vojenským materiálem",
                                    id: "tradeMilitaryMaterial",
                                    nextQuestion: {
                                        question: "Obchod s vojenským materiálem",
                                        id: "tradeMilitaryMaterialAdd",
                                        type: "buttons",
                                        answers: [
                                            { text: "Ano" },
                                            { text: "Ne" }
                                        ]
                                    }
                                },

                                {   
                                    text: "Výroba vojenského materiálu",
                                    id: "productionMilitaryMaterial",
                                    nextQuestion: {
                                        question: "Jste výrobce vojenského materiálu uvedeného v seznamu vojenského materiálu podle zákona o zahraničním obchodu s vojenským materiálem",
                                        id: "productionMilitaryMaterialAdd",
                                        type: "buttons",
                                        answers: [
                                            { text: "Ano" },
                                            { text: "Ne" }
                                        ]
                                    }
                                },
                            ]
                        },
                        {
                            //Výrobní průmysl
                                question: "Jakou službu poskytujete",
                                type: "select",
                                id: "manufacturing-industry",
                                dependsOn: { id: "industry", value: "Výrobní průmysl" },
                                answers: [
                        
                                    {   
                                        text: "Výroba elektrických zařízení",
                                        id: "manufactureElectricalEquipment",
                                        nextQuestion: {
                                            question: "Jste výrobce elektrických zařízení ve smyslu oddílu 27 klasifikace CZ-NACE",
                                            id: "manufactureElectricalEquipmentAdd",
                                            type: "buttons",
                                            answers: [
                                                { text: "Ano" },
                                                { text: "Ne" }
                                            ]
                                        }
                                    },

                                    {   
                                        text: "Výroba motorových vozidel (kromě motocyklů), přívěsů a návěsů",
                                        id: "manufactureMotorVehicles",
                                        nextQuestion: {
                                            question: "Jste výrobce motorových vozidel, přívěsů a návěsů ve smyslu oddílu 29 klasifikace CZ-NACE",
                                            id: "manufactureMotorVehiclesAdd1",
                                            type: "buttons",
                                            answers: [
                                                { text: "Ano",
                                                    nextQuestion: { 
                                                        question: "Vyrábíte sériově osobní motorová vozidla",
                                                        id: "manufactureMotorVehiclesAdd2",
                                                        type: "buttons",
                                                        answers: [
                                                            { text: "Ano" },
                                                            { text: "Ne" },
                                                        ]
                                                    }
                                                 },
                                                { text: "Ne",
                                                    nextQuestion: { 
                                                        question: "Vyrábíte sériově osobní motorová vozidla",
                                                        id: "manufactureMotorVehiclesAdd2",
                                                        type: "buttons",
                                                        answers: [
                                                            { text: "Ano" },
                                                            { text: "Ne" },
                                                        ]
                                                    }
                                                 }
                                            ]
                                        }
                                    },

                                    {   
                                        text: "Výroba ostatních dopravních prostředků a zařízení",
                                        id: "manufactureTransportVehicle",
                                        nextQuestion: {
                                            question: "Jste výrobce ostatních dopravních prostředků a zařízení ve smyslu oddílu 30 klasifikace CZ-NACE",
                                            id: "manufactureTransportVehicleAdd",
                                            type: "buttons",
                                            answers: [
                                                { text: "Ano" },
                                                { text: "Ne" }
                                            ]
                                        }
                                    },

                                    {   
                                        text: "Výroba počítačů, elektronických a optických přístrojů a zařízení",
                                        id: "manufactureComputers",
                                        nextQuestion: {
                                            question: "Jste výrobce počítačů, elektronických a optických přístrojů a zařízení ve smyslu oddílu 26 klasifikace CZ-NACE",
                                            id: "manufactureComputersAdd",
                                            type: "buttons",
                                            answers: [
                                                { text: "Ano" },
                                                { text: "Ne" }
                                            ]
                                        }
                                    },

                                    {   
                                        text: "Výroba strojů a zařízení nezařazená pod jiné oddíly klasifikace CZ-NACE",
                                        id: "manufactureMachinery",
                                        nextQuestion: {
                                            question: "Jste jinde nezařazený výrobce strojů a zařízení ve smyslu oddílu 28 klasifikace CZ-NACE",
                                            id: "manufactureMachineryAdd",
                                            type: "buttons",
                                            answers: [
                                                { text: "Ano" },
                                                { text: "Ne" }
                                            ]
                                        }
                                    },
                                ]
                        },
        
        


    /*
//template 

    {
    //Drazni doprava
        question: "Jakou službu poskytujete",
        type: "select",
        id: "rail-service",
        dependsOn: { id: "industry", value: "Drážní doprava" },
        answers: [

            {   
                text: "Provoz celostátní dráhy",
                id: "nationalRailwayService",
                nextQuestion: {
                    question: "Jste provozovatel celostátní dráhy podle zákona o drahách",
                    id: "nationalRailwayServiceAdd",
                    type: "buttons",
                    answers: [
                        { text: "Ano" },
                        { text: "Ne" }
                    ]
                }
            },

            {   
                    text: "Uskladňování plynu",
                    id: "storingGas",
                    nextQuestion: {
                        question: "Jste držitel licence na uskladňování plynu podle energetického zákona",
                        id: "storingGasAdd1",
                        type: "buttons",
                        answers: [
                            { text: "Ano",
                                nextQuestion: { 
                                    question: "Provozujete podzemní zásobník plynu s projektovanou instalovanou kapacitou nejméně 200 mil. m³",
                                    id: "storingGasAdd2",
                                    type: "buttons",
                                    answers: [
                                        { text: "Ano" },
                                        { text: "Ne" },
                                    ]
                                }
                             },
                            { text: "Ne",
                                nextQuestion: { 
                                    question: "Provozujete podzemní zásobník plynu s projektovanou instalovanou kapacitou nejméně 200 mil. m³",
                                    id: "storingGasAdd2",
                                    type: "buttons",
                                    answers: [
                                        { text: "Ano" },
                                        { text: "Ne" },
                                    ]
                                }
                             }
                        ]
                    }
                },

        ]
    },



    */
                



      ////

    {
      question: "Kolik má vaše společnost zaměstnanců",
      type: "buttons",
      id: "employee",
      answers: [
        { text: "Méně jak 10 zaměstnanců", value: 0 },
        { text: "Méně jak 50 zaměstnanců", value: 1 },
        { text: "Méně jak 250 zaměstnanců", value: 2 },
        { text: "Více jak 250 zaměstnanců", value: 3 }
      ]
    },
    {
      question: "Jaký je váš roční obrat nebo suma bilanční rozvahy",
      type: "buttons",
      id: "revenue",
      answers: [
        { text: "Obrat menší jak 2 miliony EUR", value: 0 },
        { text: "Obrat menší jak 10 milionů EUR", value: 1 },
        { text: "Obrat menší jak 50 milionů EUR", value: 2 },
        { text: "Obrat větší jak 50 milionů EUR", value: 3 }
      ]
    }
  ];
  
  export const evalRules = {
    "Digitální infrastruktura a služby": {
      "Poskytování platformy sociální sítě": {
        "Ano": {
          employees: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Nižší regulace",
            3: "Nižší regulace"
          },
          turnover: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Nižší regulace",
            3: "Nižší regulace"
          }
        },
        "Ne": "Žádná regulace"
      },
      "Poskytování řízené bezpečnostní služby": { 
        "Ano": {
            employees: {
                0: "Žádná regulace",
                1: "Žádná regulace",
                2: "Nižší regulace", 
                3: "Vyšší regulace" },
            turnover: { 
                0: "Žádná regulace", 
                1: "Žádná regulace", 
                2: "Nižší regulace", 
                3: "Vyšší regulace" }
        },
        "Ne": "Žádná regulace"
    },
    "Poskytování řízené služby": { 
        "Ano": {
            employees: {
                0: "Žádná regulace",
                1: "Žádná regulace",
                2: "Nižší regulace", 
                3: "Vyšší regulace" },
            turnover: { 
                0: "Žádná regulace", 
                1: "Žádná regulace", 
                2: "Nižší regulace", 
                3: "Vyšší regulace" }
        },
        "Ne": "Žádná regulace"
    },
    "Poskytování služby cloud computingu": { 
        "Ano": {
            employees: {
                0: "Vyšší regulace",
                1: "Vyšší regulace",
                2: "Vyšší regulace", 
                3: "Vyšší regulace" },
            turnover: { 
                0: "Vyšší regulace", 
                1: "Vyšší regulace", 
                2: "Vyšší regulace", 
                3: "Vyšší regulace" }
        },
        "Ne":  {
            employees: {
                0: "Žádná regulace",
                1: "Žádná regulace",
                2: "Nižší regulace", 
                3: "Vyšší regulace" },
            turnover: { 
                0: "Žádná regulace", 
                1: "Žádná regulace", 
                2: "Nižší regulace", 
                3: "Vyšší regulace" }
        },
    },
    "Poskytování služby datového centra": { 
        "Ano": {
            employees: {
                0: "Žádná regulace",
                1: "Žádná regulace",
                2: "Nižší regulace", 
                3: "Vyšší regulace" },
            turnover: { 
                0: "Žádná regulace", 
                1: "Žádná regulace", 
                2: "Nižší regulace", 
                3: "Vyšší regulace" }
        },
        "Ne": "Žádná regulace"
    },
    "Poskytování služby internetového vyhledávače": { 
        "Ano": {
            employees: {
                0: "Žádná regulace",
                1: "Žádná regulace",
                2: "Nižší regulace", 
                3: "Nižší regulace" },
            turnover: { 
                0: "Žádná regulace", 
                1: "Žádná regulace", 
                2: "Nižší regulace", 
                3: "Nižší regulace" }
        },
        "Ne": "Žádná regulace"
    },
    "Poskytování služby on-line tržiště": { 
        "Ano": {
            employees: {
                0: "Žádná regulace",
                1: "Žádná regulace",
                2: "Nižší regulace", 
                3: "Nižší regulace" },
            turnover: { 
                0: "Žádná regulace", 
                1: "Žádná regulace", 
                2: "Nižší regulace", 
                3: "Nižší regulace" }
        },
        "Ne": "Žádná regulace"
    },
    "Poskytování služby sítě pro doručování obsahu": { 
        "Ano": {
            employees: {
                0: "Žádná regulace",
                1: "Žádná regulace",
                2: "Nižší regulace", 
                3: "Vyšší regulace" },
            turnover: { 
                0: "Žádná regulace", 
                1: "Žádná regulace", 
                2: "Nižší regulace", 
                3: "Vyšší regulace" }
        },
        "Ne": "Žádná regulace"
    },
    "Poskytování služby systému překladu doménových jmen": {
            "Ano": { // Odpověď "Ano" na první doplňující otázku
                "Ano": { // Odpověď "Ano" na druhou doplňující otázku
                    employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace",
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                },
                "Ne": { // Odpověď "Ne" na druhou doplňující otázku
                    employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                }
            },
            "Ne": { // Odpověď "Ne" na první doplňující otázku
                "Ano":{
                employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                },
                "Ne":{
                    employees: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" },
                        turnover: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" }
                }

            }
        },

    "Poskytování služby výměnného uzlu internetu": { 
        "Ano": {
            employees: {
                0: "Vyšší regulace", 
                1: "Vyšší regulace", 
                2: "Vyšší regulace", 
                3: "Vyšší regulace" },
                turnover: { 
                0: "Vyšší regulace", 
                1: "Vyšší regulace", 
                2: "Vyšší regulace", 
                3: "Vyšší regulace" }
        },
        "Ne": "Žádná regulace"
    },

    "Poskytování služby vytváření důvěry": { 
        "Ano": { // Odpověď "Ano" na první doplňující otázku
                "Ano": { // Odpověď "Ano" na druhou doplňující otázku
                    employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace",
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                },
                "Ne": { // Odpověď "Ne" na druhou doplňující otázku
                    employees: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" },
                        turnover: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" }
                }
            },
            "Ne": { // Odpověď "Ne" na první doplňující otázku
                "Ano":{
                employees: { 
                    0: "Nižší regulace", 
                    1: "Nižší regulace", 
                    2: "Nižší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Nižší regulace", 
                    1: "Nižší regulace", 
                    2: "Nižší regulace", 
                    3: "Vyšší regulace" }
                },
                "Ne":{
                    employees: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" },
                        turnover: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" }
                }

            }
        },
    
    "Poskytování veřejně dostupné služby elektronických komunikací": { 
        "Ano": { // Odpověď "Ano" na první doplňující otázku
                "Ano": { // Odpověď "Ano" na druhou doplňující otázku
                    employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace",
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                },
                "Ne": { // Odpověď "Ne" na druhou doplňující otázku
                    employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                }
            },
            "Ne": { // Odpověď "Ne" na první doplňující otázku
                "Ano": { // Odpověď "Ano" na druhou doplňující otázku
                    employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace",
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                },
                "Ne": { // Odpověď "Ne" na druhou doplňující otázku
                    employees: { 
                    0: "Nižší regulace", 
                    1: "Nižší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Nižší regulace", 
                    1: "Nižší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
            }
        },
    },
    "Provozování Národního CERT": { 
        "Ano": {
            employees: {
                0: "Vyšší regulace",
                1: "Vyšší regulace",
                2: "Vyšší regulace", 
                3: "Vyšší regulace" },
            turnover: { 
                0: "Vyšší regulace", 
                1: "Vyšší regulace", 
                2: "Vyšší regulace", 
                3: "Vyšší regulace" }
        },
        "Ne": "Žádná regulace"
    },

    "Správa a provoz registru domény nejvyšší úrovně": { 
        "Ano": {
            employees: {
                0: "Vyšší regulace",
                1: "Vyšší regulace",
                2: "Vyšší regulace", 
                3: "Vyšší regulace" },
            turnover: { 
                0: "Vyšší regulace", 
                1: "Vyšší regulace", 
                2: "Vyšší regulace", 
                3: "Vyšší regulace" }
        },
        "Ne": "Žádná regulace"
    },
    "Správa kvalifikovaného systému elektronické identifikace": { 
        "Ano": {
            employees: {
                0: "Vyšší regulace",
                1: "Vyšší regulace",
                2: "Vyšší regulace", 
                3: "Vyšší regulace" },
            turnover: { 
                0: "Vyšší regulace", 
                1: "Vyšší regulace", 
                2: "Vyšší regulace", 
                3: "Vyšší regulace" }
        },
        "Ne": "Žádná regulace"
    },
    "Zajišťování veřejné komunikační sítě": {
    "Ano": { // Odpověď "Ano" na první doplňující otázku
                "Ano": { // Odpověď "Ano" na druhou doplňující otázku
                    employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace",
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                },
                "Ne": { // Odpověď "Ne" na druhou doplňující otázku
                    employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                }
            },
            "Ne": { // Odpověď "Ne" na první doplňující otázku
                "Ano": { // Odpověď "Ano" na druhou doplňující otázku
                    employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace",
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                },
                "Ne": { // Odpověď "Ne" na druhou doplňující otázku
                    employees: { 
                    0: "Nižší regulace", 
                    1: "Nižší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Nižší regulace", 
                    1: "Nižší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
            }
        },


    },
  },
  ///"Drážní doprava":
  "Drážní doprava": {

    "Provoz celostátní dráhy": {
        "Ano": { 
            employees: {
                0: "Žádná regulace",
                1: "Žádná regulace",
                2: "Nižší regulace",
                3: "Vyšší regulace"
            },
            turnover: {
                0: "Žádná regulace",
                1: "Žádná regulace",
                2: "Nižší regulace",
                3: "Vyšší regulace"
            }
        },
        "Ne": "Žádná regulace" 
    },

    "Provoz drážní dopravy na celostátní dráze": {
        "Ano": { 
            employees: {
                0: "Žádná regulace",
                1: "Žádná regulace",
                2: "Nižší regulace",
                3: "Vyšší regulace"
            },
            turnover: {
                0: "Žádná regulace",
                1: "Žádná regulace",
                2: "Nižší regulace",
                3: "Vyšší regulace"
            }
        },
        "Ne": "Žádná regulace" 
    },

    "Provoz drážní dopravy na regionální dráze": {
        "Ano": { 
            employees: {
                0: "Žádná regulace",
                1: "Žádná regulace",
                2: "Nižší regulace",
                3: "Vyšší regulace"
            },
            turnover: {
                0: "Žádná regulace",
                1: "Žádná regulace",
                2: "Nižší regulace",
                3: "Vyšší regulace"
            }
        },
        "Ne": "Žádná regulace" 
    },

    "Provoz drážní dopravy na veřejně přístupné vlečce": {
        "Ano": { 
            employees: {
                0: "Žádná regulace",
                1: "Žádná regulace",
                2: "Nižší regulace",
                3: "Vyšší regulace"
            },
            turnover: {
                0: "Žádná regulace",
                1: "Žádná regulace",
                2: "Nižší regulace",
                3: "Vyšší regulace"
            }
        },
        "Ne": "Žádná regulace" 
    },

    "Provoz regionální dráhy": {
        "Ano": { 
            employees: {
                0: "Žádná regulace",
                1: "Žádná regulace",
                2: "Nižší regulace",
                3: "Vyšší regulace"
            },
            turnover: {
                0: "Žádná regulace",
                1: "Žádná regulace",
                2: "Nižší regulace",
                3: "Vyšší regulace"
            }
        },
        "Ne": "Žádná regulace" 
    },

    "Provoz veřejně přístupné vlečky": {
        "Ano": { 
            employees: {
                0: "Žádná regulace",
                1: "Žádná regulace",
                2: "Nižší regulace",
                3: "Vyšší regulace"
            },
            turnover: {
                0: "Žádná regulace",
                1: "Žádná regulace",
                2: "Nižší regulace",
                3: "Vyšší regulace"
            }
        },
        "Ne": "Žádná regulace" 
    },

    "Provoz zařízení služeb": {
        "Ano": { 
            employees: {
                0: "Žádná regulace",
                1: "Žádná regulace",
                2: "Nižší regulace",
                3: "Vyšší regulace"
            },
            turnover: {
                0: "Žádná regulace",
                1: "Žádná regulace",
                2: "Nižší regulace",
                3: "Vyšší regulace"
            }
        },
        "Ne": "Žádná regulace" 
    },

    "Stavění vlakových cest": {
        "Ano": { 
            employees: {
                0: "Vyšší regulace",
                1: "Vyšší regulace",
                2: "Vyšší regulace",
                3: "Vyšší regulace"
            },
            turnover: {
                0: "Vyšší regulace",
                1: "Vyšší regulace",
                2: "Vyšší regulace",
                3: "Vyšší regulace"
            }
        },
        "Ne": "Žádná regulace" 
        },
    },
    ///"Energetika - Elektrina:

    "Energetika - Elektřina": {

        "Obchod s elektřinou": {
            "Ano": { 
                    "50 000 a více": { 
                        employees: { 
                        0: "Vyšší regulace", 
                        1: "Vyšší regulace", 
                        2: "Vyšší regulace", 
                        3: "Vyšší regulace" },
                        turnover: { 
                        0: "Vyšší regulace",
                        1: "Vyšší regulace", 
                        2: "Vyšší regulace", 
                        3: "Vyšší regulace" }
                    },
                    "10 000 a více, ale méně než 50 000": { 
                        employees: { 
                            0: "Nižší regulace", 
                            1: "Nižší regulace", 
                            2: "Nižší regulace", 
                            3: "Vyšší regulace" },
                            turnover: { 
                            0: "Nižší regulace", 
                            1: "Nižší regulace", 
                            2: "Nižší regulace", 
                            3: "Vyšší regulace" }
                    },
                    "méně než 10 000": { 
                        employees: { 
                            0: "Žádná regulace", 
                            1: "Žádná regulace", 
                            2: "Nižší regulace", 
                            3: "Vyšší regulace" },
                            turnover: { 
                            0: "Žádná regulace", 
                            1: "Žádná regulace", 
                            2: "Nižší regulace", 
                            3: "Vyšší regulace" }
                    }
                },
                "Ne": { 
                    "50 000 a více": { 
                        employees: { 
                            0: "Žádná regulace", 
                            1: "Žádná regulace", 
                            2: "Žádná regulace", 
                            3: "Žádná regulace" },
                        turnover: { 
                            0: "Žádná regulace", 
                            1: "Žádná regulace", 
                            2: "Žádná regulace", 
                            3: "Žádná regulace" }
                    },
                    "10 000 a více, ale méně než 50 000": { 
                        employees: { 
                            0: "Žádná regulace", 
                            1: "Žádná regulace", 
                            2: "Žádná regulace", 
                            3: "Žádná regulace" },
                            turnover: { 
                            0: "Žádná regulace", 
                            1: "Žádná regulace", 
                            2: "Žádná regulace", 
                            3: "Žádná regulace" }
                    },
                    "méně než 10 000": { 
                        employees: { 
                            0: "Žádná regulace", 
                            1: "Žádná regulace", 
                            2: "Žádná regulace", 
                            3: "Žádná regulace" },
                            turnover: { 
                            0: "Žádná regulace", 
                            1: "Žádná regulace", 
                            2: "Žádná regulace", 
                            3: "Žádná regulace" }
                    }
    
                },
        },

        "Provoz distribuční soustavy elektřiny": {
            "Ano": { 
                    "220 MW a více": { 
                        employees: { 
                        0: "Vyšší regulace", 
                        1: "Vyšší regulace", 
                        2: "Vyšší regulace", 
                        3: "Vyšší regulace" },
                        turnover: { 
                        0: "Vyšší regulace",
                        1: "Vyšší regulace", 
                        2: "Vyšší regulace", 
                        3: "Vyšší regulace" }
                    },
                    "120 MW a více, ale méně než 220 MW": { 
                        employees: { 
                            0: "Nižší regulace", 
                            1: "Nižší regulace", 
                            2: "Nižší regulace", 
                            3: "Vyšší regulace" },
                            turnover: { 
                            0: "Nižší regulace", 
                            1: "Nižší regulace", 
                            2: "Nižší regulace", 
                            3: "Vyšší regulace" }
                    },
                    "méně než 120 MW": { 
                        employees: { 
                            0: "Žádná regulace", 
                            1: "Žádná regulace", 
                            2: "Nižší regulace", 
                            3: "Vyšší regulace" },
                            turnover: { 
                            0: "Žádná regulace", 
                            1: "Žádná regulace", 
                            2: "Nižší regulace", 
                            3: "Vyšší regulace" }
                    }
                },
                "Ne": { 
                    "220 MW a více": { 
                        employees: { 
                            0: "Žádná regulace", 
                            1: "Žádná regulace", 
                            2: "Žádná regulace", 
                            3: "Žádná regulace" },
                        turnover: { 
                            0: "Žádná regulace", 
                            1: "Žádná regulace", 
                            2: "Žádná regulace", 
                            3: "Žádná regulace" }
                    },
                    "120 MW a více, ale méně než 220 MW": { 
                        employees: { 
                            0: "Žádná regulace", 
                            1: "Žádná regulace", 
                            2: "Žádná regulace", 
                            3: "Žádná regulace" },
                            turnover: { 
                            0: "Žádná regulace", 
                            1: "Žádná regulace", 
                            2: "Žádná regulace", 
                            3: "Žádná regulace" }
                    },
                    "méně než 120 MW": { 
                        employees: { 
                            0: "Žádná regulace", 
                            1: "Žádná regulace", 
                            2: "Žádná regulace", 
                            3: "Žádná regulace" },
                            turnover: { 
                            0: "Žádná regulace", 
                            1: "Žádná regulace", 
                            2: "Žádná regulace", 
                            3: "Žádná regulace" }
                    }
    
                },
        },

        "Provoz přenosové soustavy elektřiny": {
        "Ano": { 
            employees: {
                0: "Vyšší regulace",
                1: "Vyšší regulace",
                2: "Vyšší regulace",
                3: "Vyšší regulace"
            },
            turnover: {
                0: "Vyšší regulace",
                1: "Vyšší regulace",
                2: "Vyšší regulace",
                3: "Vyšší regulace"
            }
        },
        "Ne": "Žádná regulace" 
        },

        "Provoz veřejně přístupné dobíjecí stanice": {
            "Ano": { 
                employees: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Nižší regulace",
                    3: "Vyšší regulace"
                },
                turnover: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Nižší regulace",
                    3: "Vyšší regulace"
                }
            },
            "Ne": "Žádná regulace" 
            },

            "Výkon činnosti agregace": {
                "Ano": { 
                    employees: {
                        0: "Žádná regulace",
                        1: "Žádná regulace",
                        2: "Nižší regulace",
                        3: "Vyšší regulace"
                    },
                    turnover: {
                        0: "Žádná regulace",
                        1: "Žádná regulace",
                        2: "Nižší regulace",
                        3: "Vyšší regulace"
                    }
                },
                "Ne": "Žádná regulace" 
            },

            "Výkon činnosti Elektroenergetického datového centra": {
                "Ano": { 
                    employees: {
                        0: "Vyšší regulace",
                        1: "Vyšší regulace",
                        2: "Vyšší regulace",
                        3: "Vyšší regulace"
                    },
                    turnover: {
                        0: "Vyšší regulace",
                        1: "Vyšší regulace",
                        2: "Vyšší regulace",
                        3: "Vyšší regulace"
                    }
                },
                "Ne": "Žádná regulace" 
            },

            "Výkon činnosti nominovaného organizátora trhu s elektřinou": {
                "Ano": { 
                    employees: {
                        0: "Vyšší regulace",
                        1: "Vyšší regulace",
                        2: "Vyšší regulace",
                        3: "Vyšší regulace"
                    },
                    turnover: {
                        0: "Vyšší regulace",
                        1: "Vyšší regulace",
                        2: "Vyšší regulace",
                        3: "Vyšší regulace"
                    }
                },
                "Ne": "Žádná regulace" 
            },

            "Výkon činnosti odezvy strany poptávky": {
                "Ano": { 
                    employees: {
                        0: "Žádná regulace",
                        1: "Žádná regulace",
                        2: "Nižší regulace",
                        3: "Vyšší regulace"
                    },
                    turnover: {
                        0: "Žádná regulace",
                        1: "Žádná regulace",
                        2: "Nižší regulace",
                        3: "Vyšší regulace"
                    }
                },
                "Ne": "Žádná regulace" 
            },

            "Výkon činnosti ukládání elektřiny": {
                "Ano": { 
                    employees: {
                        0: "Žádná regulace",
                        1: "Žádná regulace",
                        2: "Nižší regulace",
                        3: "Vyšší regulace"
                    },
                    turnover: {
                        0: "Žádná regulace",
                        1: "Žádná regulace",
                        2: "Nižší regulace",
                        3: "Vyšší regulace"
                    }
                },
                "Ne": "Žádná regulace" 
            },

            "Výroba elektřiny": {
            "Ano": { 
                    "100 MW a více": { 
                        employees: { 
                        0: "Vyšší regulace", 
                        1: "Vyšší regulace", 
                        2: "Vyšší regulace", 
                        3: "Vyšší regulace" },
                        turnover: { 
                        0: "Vyšší regulace",
                        1: "Vyšší regulace", 
                        2: "Vyšší regulace", 
                        3: "Vyšší regulace" }
                    },
                    "50 MW a více, ale méně než 100 MW": { 
                        employees: { 
                            0: "Nižší regulace", 
                            1: "Nižší regulace", 
                            2: "Nižší regulace", 
                            3: "Vyšší regulace" },
                            turnover: { 
                            0: "Nižší regulace", 
                            1: "Nižší regulace", 
                            2: "Nižší regulace", 
                            3: "Vyšší regulace" }
                    },
                    "Méně než 50 MW": { 
                        employees: { 
                            0: "Žádná regulace", 
                            1: "Žádná regulace", 
                            2: "Nižší regulace", 
                            3: "Vyšší regulace" },
                            turnover: { 
                            0: "Žádná regulace", 
                            1: "Žádná regulace", 
                            2: "Nižší regulace", 
                            3: "Vyšší regulace" }
                    }
                },
                "Ne": { 
                    "100 MW a více": { 
                        employees: { 
                            0: "Žádná regulace", 
                            1: "Žádná regulace", 
                            2: "Žádná regulace", 
                            3: "Žádná regulace" },
                        turnover: { 
                            0: "Žádná regulace", 
                            1: "Žádná regulace", 
                            2: "Žádná regulace", 
                            3: "Žádná regulace" }
                    },
                    "50 MW a více, ale méně než 100 MW": { 
                        employees: { 
                            0: "Žádná regulace", 
                            1: "Žádná regulace", 
                            2: "Žádná regulace", 
                            3: "Žádná regulace" },
                            turnover: { 
                            0: "Žádná regulace", 
                            1: "Žádná regulace", 
                            2: "Žádná regulace", 
                            3: "Žádná regulace" }
                    },
                    "Méně než 50 MW": { 
                        employees: { 
                            0: "Žádná regulace", 
                            1: "Žádná regulace", 
                            2: "Žádná regulace", 
                            3: "Žádná regulace" },
                            turnover: { 
                            0: "Žádná regulace", 
                            1: "Žádná regulace", 
                            2: "Žádná regulace", 
                            3: "Žádná regulace" }
                    }
    
                },
        },          
    },

    //Energetika - Plynárenství

    "Energetika - Plynárenství": {
        "Obchod s plynem": {
            "Ano": { 
                employees: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Nižší regulace",
                    3: "Vyšší regulace"
                },
                turnover: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Nižší regulace",
                    3: "Vyšší regulace"
                }
            },
            "Ne": "Žádná regulace" 
        },

        "Provoz distribuční soustavy plynu": {
            "Ano": { 
                employees: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Nižší regulace",
                    3: "Vyšší regulace"
                },
                turnover: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Nižší regulace",
                    3: "Vyšší regulace"
                }
            },
            "Ne": "Žádná regulace" 
        },

        "Provoz přepravní soustavy plynu": {
            "Ano": { 
                employees: {
                    0: "Vyšší regulace",
                    1: "Vyšší regulace",
                    2: "Vyšší regulace",
                    3: "Vyšší regulace"
                },
                turnover: {
                    0: "Vyšší regulace",
                    1: "Vyšší regulace",
                    2: "Vyšší regulace",
                    3: "Vyšší regulace"
                }
            },
            "Ne": "Žádná regulace" 
        },

        "Uskladňování plynu": {
            "Ano": { // Odpověď "Ano" na první doplňující otázku
                "Ano": { // Odpověď "Ano" na druhou doplňující otázku
                    employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace",
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                },
                "Ne": { // Odpověď "Ne" na druhou doplňující otázku
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Nižší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Nižší regulace", 
                    3: "Vyšší regulace" }
                }
            },
            "Ne": { // Odpověď "Ne" na první doplňující otázku
                "Ano": { // Odpověď "Ano" na druhou doplňující otázku
                    employees: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" },
                        turnover: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" }
                },
                "Ne": { // Odpověď "Ne" na druhou doplňující otázku
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" }
            }
        },
    },
    "Výroba plynu": {
            "Ano": { 
                employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Nižší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Nižší regulace", 
                    3: "Vyšší regulace" 
                }
            },
            "Ne": "Žádná regulace" 
        },
    },

    //energetika - ropa
"Energetika - Ropa a ropné produkty": {
      "Provoz čerpací stanice pohonných hmot": {
        "Ano": {
          employees: {
            0: "Nižší regulace",
            1: "Nižší regulace",
            2: "Nižší regulace",
            3: "Nižší regulace"
          },
          turnover: {
            0: "Nižší regulace",
            1: "Nižší regulace",
            2: "Nižší regulace",
            3: "Nižší regulace"
          }
        },
        "Ne": "Žádná regulace"
      },

      "Provoz produktovodu": {
            "Ano": { 
                employees: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Nižší regulace",
                    3: "Vyšší regulace"
                },
                turnover: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Nižší regulace",
                    3: "Vyšší regulace"
                }
            },
            "Ne": "Žádná regulace" 
        },

        "Provoz ropovodu": {
            "Ano": { 
                employees: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Nižší regulace",
                    3: "Vyšší regulace"
                },
                turnover: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Nižší regulace",
                    3: "Vyšší regulace"
                }
            },
            "Ne": "Žádná regulace" 
        },

        "Provoz skladovacího zařízení": {
            "Ano": { 
                "Ano": { 
                    employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace",
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                },
                "Ne": { 
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Nižší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Nižší regulace", 
                    3: "Vyšší regulace" }
                }
            },
            "Ne": {
                "Ano": { 
                    employees: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" },
                        turnover: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" }
                },
                "Ne": { 
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" }
            }
        },
    },

    "Těžba ropy": {
            "Ano": { 
                employees: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Nižší regulace",
                    3: "Vyšší regulace"
                },
                turnover: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Nižší regulace",
                    3: "Vyšší regulace"
                }
            },
            "Ne": "Žádná regulace" 
        },

        "Výkon činnosti ústředního správce zásob": {
            "Ano": { 
                employees: {
                    0: "Vyšší regulace",
                    1: "Vyšší regulace",
                    2: "Vyšší regulace",
                    3: "Vyšší regulace"
                },
                turnover: {
                    0: "Vyšší regulace",
                    1: "Vyšší regulace",
                    2: "Vyšší regulace",
                    3: "Vyšší regulace"
                }
            },
            "Ne": "Žádná regulace" 
        },

        "Zpracovávání ropy": {
            "Ano": { 
                employees: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Nižší regulace",
                    3: "Vyšší regulace"
                },
                turnover: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Nižší regulace",
                    3: "Vyšší regulace"
                }
            },
            "Ne": "Žádná regulace" 
        },
    },

    //Energetika - teplarenstvi
    "Energetika - Teplárenství": {
        "Provoz soustavy zásobování tepelnou energií": {
            "Ano": {
                "Ano": { 
                    employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace",
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                },
                "Ne": { 
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Nižší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Nižší regulace", 
                    3: "Vyšší regulace" }
                }
            },
            "Ne": { 
                "Ano": { 
                    employees: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" },
                        turnover: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" }
                },
                "Ne": {
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" }
            }
        },
    },
    
    "Výroba tepelné energie": {
            "Ano": {
                "Ano": { 
                    employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace",
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                },
                "Ne": { 
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Nižší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Nižší regulace", 
                    3: "Vyšší regulace" }
                }
            },
            "Ne": { 
                "Ano": { 
                    employees: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" },
                        turnover: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" }
                },
                "Ne": {
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" }
                }
            },
        },
    },
    //Energetika - vodík
    "Energetika - Vodík": {
      "Přeprava vodíku": {
        "Ano": {
          employees: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Nižší regulace",
            3: "Vyšší regulace"
          },
          turnover: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Nižší regulace",
            3: "Vyšší regulace"
          }
        },
        "Ne": "Žádná regulace"
      },

      "Skladování vodíku": {
            "Ano": { 
                employees: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Nižší regulace",
                    3: "Vyšší regulace"
                  },
                  turnover: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Nižší regulace",
                    3: "Vyšší regulace"
                  }
            },
            "Ne": "Žádná regulace" 
        },

        "Výroba vodíku": {
            "Ano": { 
                employees: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Nižší regulace",
                    3: "Vyšší regulace"
                  },
                  turnover: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Nižší regulace",
                    3: "Vyšší regulace"
                  }
            },
            "Ne": "Žádná regulace" 
        },
    },
 //Finanční trh
    "Finanční trh": {
      "Provoz obchodního systému": {
        "Ano": {
          employees: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
          },
          turnover: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
          }
        },
        "Ne": "Žádná regulace"
      },

        "Výkon činnosti instituce elektronických peněz": {
            "Ano": {
                "Ano": { 
                    employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace",
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                },
                "Ne": { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" }
                }
            },
            "Ne": { 
                "Ano": { 
                    employees: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" },
                        turnover: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" }
                },
                "Ne": {
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" }
            }
        },


        "Výkon činnosti platební instituce": {
            "Ano": {
                "Ano": { 
                    employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace",
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                },
                "Ne": { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" }
                }
            },
            "Ne": { 
                "Ano": { 
                    employees: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" },
                        turnover: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" }
                },
                "Ne": {
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" }
            }
        },

        "Výkon činnosti ústřední protistrany": {
        "Ano": {
          employees: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
          },
          turnover: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
          }
        },
        "Ne": "Žádná regulace"
      },

      "Výkon činnosti úvěrové instituce": {
        "Ano": {
          employees: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
          },
          turnover: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
          }
        },
        "Ne": "Žádná regulace"
      },

        
    },

    "Finanční trh": {
      "Provoz obchodního systému": {
        "Ano": {
          employees: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
          },
          turnover: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
          }
        },
        "Ne": "Žádná regulace"
      },
    

    "Výkon činnosti instituce elektronických peněz": {
            "Ano": {
                "Ano": { 
                    employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace",
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                },
                "Ne": { 
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" }
                }
            },
            "Ne": { 
                "Ano": { 
                    employees: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" },
                        turnover: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" }
                },
                "Ne": {
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" }
            }
        },
    },

    "Výkon činnosti platební instituce": {
            "Ano": {
                "Ano": { 
                    employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace",
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                },
                "Ne": { 
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" }
                }
            },
            "Ne": { 
                "Ano": { 
                    employees: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" },
                        turnover: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" }
                },
                "Ne": {
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" }
            }
        },
    },
    },
    "Výkon činnosti ústřední protistrany": {
        "Ano": {
          employees: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
          },
          turnover: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
          }
        },
        "Ne": "Žádná regulace"
      },

      "Výkon činnosti úvěrové instituce": {
        "Ano": {
          employees: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
          },
          turnover: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
          }
        },
        "Ne": "Žádná regulace"
      },

      "Chemický průmysl": {
      "Distribuce chemických látek podléhajících registraci": {
            "Ano": {
                "Ano": { 
                    employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace",
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                },
                "Ne": { 
                    employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                }
            },
            "Ne": { 
                "Ano": { 
                    employees: { 
                        0: "Nižší regulace", 
                        1: "Nižší regulace", 
                        2: "Nižší regulace", 
                        3: "Nižší regulace" },
                        turnover: { 
                        0: "Nižší regulace", 
                        1: "Nižší regulace", 
                        2: "Nižší regulace", 
                        3: "Nižší regulace" }
                },
                "Ne": {
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Nižší regulace", 
                    3: "Nižší regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Nižší regulace", 
                    3: "Nižší regulace" }
                }
            },
        },

        "Užívání objektu za účelem umístění nebezpečné látky": {
            "Ano": {
                "Ano": { 
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Žádná regulace",
                    1: "Žádná regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                },
                "Ne": { 
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                }
            },
            "Ne": { 
                "Ano": { 
                    employees: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Nižší regulace", 
                        3: "Nižší regulace" },
                        turnover: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Nižší regulace", 
                        3: "Nižší regulace" }
                },
                "Ne": {
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" }
                }
            },
        },

        "Výroba chemických látek podléhajících registraci": {
            "Ano": {
                "Ano": { 
                    employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace",
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                },
                "Ne": { 
                    employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                }
            },
            "Ne": { 
                "Ano": { 
                    employees: { 
                        0: "Nižší regulace", 
                        1: "Nižší regulace", 
                        2: "Nižší regulace", 
                        3: "Nižší regulace" },
                        turnover: { 
                        0: "Nižší regulace", 
                        1: "Nižší regulace", 
                        2: "Nižší regulace", 
                        3: "Nižší regulace" }
                },
                "Ne": {
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Nižší regulace", 
                    3: "Nižší regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Nižší regulace", 
                    3: "Nižší regulace" }
                }
            },
        },

        "Výroba předmětů z látek podléhajících registraci": {
            "Ano": {
                "Ano": { 
                    employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace",
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                },
                "Ne": { 
                    employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                }
            },
            "Ne": { 
                "Ano": { 
                    employees: { 
                        0: "Nižší regulace", 
                        1: "Nižší regulace", 
                        2: "Nižší regulace", 
                        3: "Nižší regulace" },
                        turnover: { 
                        0: "Nižší regulace", 
                        1: "Nižší regulace", 
                        2: "Nižší regulace", 
                        3: "Nižší regulace" }
                },
                "Ne": {
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Nižší regulace", 
                    3: "Nižší regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Nižší regulace", 
                    3: "Nižší regulace" }
                }
            },
        },
    },

    "Letecká doprava": {
      "Bezpečnostní kontrola týkající se nákladu nebo poštovních zásilek": {
        "Ano": {
          employees: {
            0: "Nižší regulace",
            1: "Nižší regulace",
            2: "Nižší regulace",
            3: "Nižší regulace"
          },
          turnover: {
            0: "Nižší regulace",
            1: "Nižší regulace",
            2: "Nižší regulace",
            3: "Nižší regulace"
          }
        },
        "Ne": "Žádná regulace"
      },

      "Letové navigační služby": {
            "Ano": {
                "Ano": { 
                    employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace",
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                },
                "Ne": { 
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Nižší regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Nižší regulace" }
                }
            },
            "Ne": { 
                "Ano": { 
                    employees: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" },
                        turnover: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" }
                },
                "Ne": {
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" }
            }
        },
    },

    "Provoz letecké dopravy": {
            "Ano": {
                "Ano": { 
                    employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace",
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                },
                "Ne": { 
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Nižší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Nižší regulace", 
                    3: "Vyšší regulace" }
                }
            },
            "Ne": { 
                "Ano": { 
                    employees: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" },
                        turnover: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" }
                },
                "Ne": {
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" }
            }
        },
    },

"Provoz letiště": {
            "Ano": {
                "Ano": { 
                    employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace",
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                },
                "Ne": { 
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Nižší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Nižší regulace", 
                    3: "Vyšší regulace" }
                }
            },
            "Ne": { 
                "Ano": { 
                    employees: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" },
                        turnover: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" }
                },
                "Ne": {
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" }
            }
        },
    },

    "Provoz pomocných zařízení v rámci letiště": {
        "Ano": {
          employees: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Nižší regulace",
            3: "Vyšší regulace"
          },
          turnover: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Nižší regulace",
            3: "Vyšší regulace"
          }
        },
        "Ne": "Žádná regulace"
      },

      "Služba dodávek palubních zásob": {
        "Ano": {
          employees: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Žádná regulace",
            3: "Nižší regulace"
          },
          turnover: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Žádná regulace",
            3: "Nižší regulace"
          }
        },
        "Ne": "Žádná regulace"
      },

      "Služba odesílání nákladu nebo poštovních zásilek": {
        "Ano": {
          employees: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Žádná regulace",
            3: "Nižší regulace"
          },
          turnover: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Žádná regulace",
            3: "Nižší regulace"
          }
        },
        "Ne": "Žádná regulace"
      },

      "Služba při odbavovacím procesu": {
        "Ano": {
          employees: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Žádná regulace",
            3: "Nižší regulace"
          },
          turnover: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Žádná regulace",
            3: "Nižší regulace"
          }
        },
        "Ne": "Žádná regulace"
      },

      "Služba řízení letového provozu ve vzdušném prostoru České republiky": {
        "Ano": {
          employees: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
          },
          turnover: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
          }
        },
        "Ne": "Žádná regulace"
      },
    },

    //Odpadové hospodářství
    "Odpadové hospodářství": {
        "Obchodování s odpadem": {
          "Ano": {
            employees: {
              0: "Žádná regulace",
              1: "Žádná regulace",
              2: "Nižší regulace",
              3: "Nižší regulace"
            },
            turnover: {
              0: "Žádná regulace",
              1: "Žádná regulace",
              2: "Nižší regulace",
              3: "Nižší regulace"
            }
          },
          "Ne": "Žádná regulace"
        },
  
        "Provoz zařízení určeného pro nakládání s odpady": {
              "Ano": { 
                  employees: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Nižší regulace",
                    3: "Nižší regulace"
                  },
                  turnover: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Nižší regulace",
                    3: "Nižší regulace"
                  }
              },
              "Ne": "Žádná regulace" 
          },

          "Přeprava odpadu": {
            "Ano": { 
                employees: {
                  0: "Žádná regulace",
                  1: "Žádná regulace",
                  2: "Nižší regulace",
                  3: "Nižší regulace"
                },
                turnover: {
                  0: "Žádná regulace",
                  1: "Žádná regulace",
                  2: "Nižší regulace",
                  3: "Nižší regulace"
                }
            },
            "Ne": "Žádná regulace" 
        },

        "Zprostředkování nakládání s odpadem": {
            "Ano": { 
                employees: {
                  0: "Žádná regulace",
                  1: "Žádná regulace",
                  2: "Nižší regulace",
                  3: "Nižší regulace"
                },
                turnover: {
                  0: "Žádná regulace",
                  1: "Žádná regulace",
                  2: "Nižší regulace",
                  3: "Nižší regulace"
                }
            },
            "Ne": "Žádná regulace" 
        },
      },

      //Poštovní a kurýrní služby

      "Poštovní a kurýrní služby": {
      "Poskytování poštovní a kurýrní služby": {
            "Ano": {
                "Ano": { 
                    employees: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Nižší regulace", 
                        3: "Nižší regulace" },
                        turnover: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Nižší regulace", 
                        3: "Nižší regulace" }
                },
                "Ne": { 
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Nižší regulace", 
                    3: "Nižší regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Nižší regulace", 
                    3: "Nižší regulace" }
                }
            },
            "Ne": { 
                "Ano": { 
                    employees: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Nižší regulace", 
                        3: "Nižší regulace" },
                        turnover: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Nižší regulace", 
                        3: "Nižší regulace" }
                },
                "Ne": {
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" }
            }
        },
    },
},

//Potravinařský průmysl

"Potravinařský průmysl": {
      "Distribuce potravin": {
        "Ano": {
          employees: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Nižší regulace",
            3: "Nižší regulace"
          },
          turnover: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Nižší regulace",
            3: "Nižší regulace"
          }
        },
        "Ne": "Žádná regulace"
      },

      "Výroba potravin": {
        "Ano": {
          employees: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Nižší regulace",
            3: "Nižší regulace"
          },
          turnover: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Nižší regulace",
            3: "Nižší regulace"
          }
        },
        "Ne": "Žádná regulace"
      },

      "Zpracování potravin": {
        "Ano": {
          employees: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Nižší regulace",
            3: "Nižší regulace"
          },
          turnover: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Nižší regulace",
            3: "Nižší regulace"
          }
        },
        "Ne": "Žádná regulace"
      },
    
    },
//
    "Věda, výzkum a vzdělání": {
        "Provozování velké výzkumné infrastruktury": {
            "Ano": {
                "Ano": { 
                    employees: { 
                        0: "Vyšší regulace", 
                        1: "Vyšší regulace", 
                        2: "Vyšší regulace", 
                        3: "Vyšší regulace" },
                        turnover: { 
                        0: "Vyšší regulace", 
                        1: "Vyšší regulace", 
                        2: "Vyšší regulace", 
                        3: "Vyšší regulace" }
                },
                "Ne": { 
                    employees: { 
                        0: "Vyšší regulace", 
                        1: "Vyšší regulace", 
                        2: "Vyšší regulace", 
                        3: "Vyšší regulace" },
                        turnover: { 
                        0: "Vyšší regulace", 
                        1: "Vyšší regulace", 
                        2: "Vyšší regulace", 
                        3: "Vyšší regulace" }
                }
            },
            "Ne": { 
                "Ano": { 
                    employees: { 
                        0: "Vyšší regulace", 
                        1: "Vyšší regulace", 
                        2: "Vyšší regulace", 
                        3: "Vyšší regulace" },
                        turnover: { 
                        0: "Vyšší regulace", 
                        1: "Vyšší regulace", 
                        2: "Vyšší regulace", 
                        3: "Vyšší regulace" }
                },
                "Ne": {
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" }
            }
        },
    },

    "Výzkum a vývoj": {
    "Ano": { // Odpověď na první doplňující otázku (předpoklad)
        "Ano": { // Odpověď na druhou doplňující otázku (předpoklad)
            "Ano": { // Odpověď na třetí doplňující otázku (předpoklad)
                employees: {
                    0: "Vyšší regulace",
                    1: "Vyšší regulace",
                    2: "Vyšší regulace",
                    3: "Vyšší regulace"
                },
                turnover: {
                    0: "Vyšší regulace",
                    1: "Vyšší regulace",
                    2: "Vyšší regulace",
                    3: "Vyšší regulace"
                }
            },
            "Ne": { // Odpověď na třetí doplňující otázku (předpoklad)
                employees: {
                    0: "Vyšší regulace",
                    1: "Vyšší regulace",
                    2: "Vyšší regulace",
                    3: "Vyšší regulace"
                },
                turnover: {
                    0: "Vyšší regulace",
                    1: "Vyšší regulace",
                    2: "Vyšší regulace",
                    3: "Vyšší regulace"
                }
            }
        },
        "Ne": { // Odpověď na druhou doplňující otázku (předpoklad)
            "Ano": { // Odpověď na třetí doplňující otázku (předpoklad)
                employees: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Nižší regulace",
                    3: "Nižší regulace"
                },
                turnover: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Nižší regulace",
                    3: "Nižší regulace"
                }
            },
            "Ne": { // Odpověď na třetí doplňující otázku (předpoklad)
                employees: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Žádná regulace",
                    3: "Žádná regulace"
                },
                turnover: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Žádná regulace",
                    3: "Žádná regulace"
                }
            }
        }
    },
    "Ne": { // Odpověď na první doplňující otázku (předpoklad)
        "Ano": { // Odpověď na druhou doplňující otázku (předpoklad)
            "Ano": { // Odpověď na třetí doplňující otázku (předpoklad)
                employees: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Žádná regulace",
                    3: "Žádná regulace"
                },
                turnover: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Žádná regulace",
                    3: "Žádná regulace"
                }
            },
            "Ne": { // Odpověď na třetí doplňující otázku (předpoklad)
                employees: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Žádná regulace",
                    3: "Žádná regulace"
                },
                turnover: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Žádná regulace",
                    3: "Žádná regulace"
                }
            }
        },
        "Ne": { // Odpověď na druhou doplňující otázku (předpoklad)
            "Ano": { // Odpověď na třetí doplňující otázku (předpoklad)
                employees: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Žádná regulace",
                    3: "Žádná regulace"
                },
                turnover: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Žádná regulace",
                    3: "Žádná regulace"
                }
            },
            "Ne": { // Odpověď na třetí doplňující otázku (předpoklad)
                employees: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Žádná regulace",
                    3: "Žádná regulace"
                },
                turnover: {
                    0: "Žádná regulace",
                    1: "Žádná regulace",
                    2: "Žádná regulace",
                    3: "Žádná regulace"
                }
            }
        }
    }
},
},

"Veřejná správa a výkon veřejné moci": {
  "Výkon svěřených pravomocí": {
    "Akademii věd České republiky": {
      employees: {
        0: "Nižší regulace",
        1: "Nižší regulace",
        2: "Nižší regulace",
        3: "Nižší regulace"
      },
      turnover: {
        0: "Nižší regulace",
        1: "Nižší regulace",
        2: "Nižší regulace",
        3: "Nižší regulace"
      }
    },
    "Česká národní banka": {
      employees: {
        0: "Vyšší regulace",
        1: "Vyšší regulace",
        2: "Vyšší regulace",
        3: "Vyšší regulace"
      },
      turnover: {
        0: "Vyšší regulace",
        1: "Vyšší regulace",
        2: "Vyšší regulace",
        3: "Vyšší regulace"
      }
    },
    "Generální inspekce bezpečnostních sborů": {
        employees: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
          },
          turnover: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
      }
    },
    "Generální ředitelství Hasičského záchranného sboru": {
        employees: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
          },
          turnover: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
      }
    },
    "Hlavní město Praha": {
        employees: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
          },
          turnover: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
      }
    },
    "Kancelář Poslanecké sněmovny": {
        employees: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
          },
          turnover: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
      }
    },
    "Kancelář prezidenta republiky": {
        employees: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
          },
          turnover: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
      }
    },
    "Kancelář Senátu": {
        employees: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
          },
          turnover: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
      }
    },
    "Kancelář Veřejného ochránce práv": {
        employees: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
          },
          turnover: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
      }
    },
    "Kraj": {
        employees: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
          },
          turnover: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
      }
    },
    "Krajské ředitelství Hasičského záchranného sboru": {
        employees: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
          },
          turnover: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
      }
    },
    "Městská část hlavního města Prahy, na kterou byl přenesen výkon působnosti dle zákona o hlavním městě Praze": {
        employees: {
            0: "Nižší regulace",
            1: "Nižší regulace",
            2: "Nižší regulace",
            3: "Nižší regulace"
          },
          turnover: {
            0: "Nižší regulace",
            1: "Nižší regulace",
            2: "Nižší regulace",
            3: "Nižší regulace"
      }
    },
    "Nejvyšší kontrolní úřad": {
        employees: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
          },
          turnover: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
      }
    },
    "Obec s rozšířenou působností": {
        employees: {
            0: "Nižší regulace",
            1: "Nižší regulace",
            2: "Nižší regulace",
            3: "Nižší regulace"
          },
          turnover: {
            0: "Nižší regulace",
            1: "Nižší regulace",
            2: "Nižší regulace",
            3: "Nižší regulace"
      }
    },
    "Orgán soudní moci": {
        employees: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
          },
          turnover: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
      }
    },
    "Policejní prezidium": {
        employees: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
          },
          turnover: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
      }
    },
    "Profesní komora (nevztahuje se na regionální struktury profesních komor)": {
        employees: {
            0: "Nižší regulace",
            1: "Nižší regulace",
            2: "Nižší regulace",
            3: "Nižší regulace"
          },
          turnover: {
            0: "Nižší regulace",
            1: "Nižší regulace",
            2: "Nižší regulace",
            3: "Nižší regulace"
      }
    },
    "Správa úložišť radioaktivních odpadů": {
        employees: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
          },
          turnover: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
        }
    },
    "Státní zastupitelství": {
        employees: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
          },
          turnover: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
      }
    },
    "Úřád pro zastupování státu ve věcech majetkových": {
        employees: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
          },
          turnover: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
      }
    },
    "Ústřední orgán státní správy": {
        employees: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
          },
          turnover: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
  }
},
"Útvar policie s celostátní působností": {
        employees: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
        },
        turnover: {
            0: "Vyšší regulace",
            1: "Vyšší regulace",
            2: "Vyšší regulace",
            3: "Vyšší regulace"
        }
},
"Územně dekoncentrovaný (specializovaný) orgán státní správy": {
        employees: {
            0: "Nižší regulace",
            1: "Nižší regulace",
            2: "Nižší regulace",
            3: "Nižší regulace"
        },
        turnover: {
            0: "Nižší regulace",
            1: "Nižší regulace",
            2: "Nižší regulace",
            3: "Nižší regulace"
    }
},
"Vysoká škola": {
    employees: {
        0: "Nižší regulace",
        1: "Nižší regulace",
        2: "Nižší regulace",
        3: "Nižší regulace"
    },
    turnover: {
        0: "Nižší regulace",
        1: "Nižší regulace",
        2: "Nižší regulace",
        3: "Nižší regulace"
  }
},
"Zdravotní pojišťovna": {
    employees: {
        0: "Vyšší regulace",
        1: "Vyšší regulace",
        2: "Vyšší regulace",
        3: "Vyšší regulace"
    },
    turnover: {
        0: "Vyšší regulace",
        1: "Vyšší regulace",
        2: "Vyšší regulace",
        3: "Vyšší regulace"
  }
},
"Jiný správní úřad s celostátní působností, a to včetně ústředí a generálního ředitelství územně dekoncentrovaných (specializovaných) orgánů státní správy": {
    employees: {
        0: "Vyšší regulace",
        1: "Vyšší regulace",
        2: "Vyšší regulace",
        3: "Vyšší regulace"
    },
    turnover: {
        0: "Vyšší regulace",
        1: "Vyšší regulace",
        2: "Vyšší regulace",
        3: "Vyšší regulace"
  }
},
"Jiný orgán nebo osoba": {
  employee: {
    0: "Žádná regulace",
    1: "Žádná regulace",
    2: "Žádná regulace",
    3: "Žádná regulace"
  },
  turnover: {
    0: "Žádná regulace",
    1: "Žádná regulace",
    2: "Žádná regulace",
    3: "Žádná regulace"
  }
}
    
}
},
//Vesmírný průmysl
"Vesmírný průmysl": {
      "Zajištění podpory poskytování služeb využívajících kosmického prostoru": {
        "Ano": {
          employees: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Nižší regulace",
            3: "Vyšší regulace"
          },
          turnover: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Nižší regulace",
            3: "Vyšší regulace"
          }
        },
        "Ne": "Žádná regulace"
      },
    },

    //Vodní doprava
    "Vodní doprava": {
        "Provoz řídícího orgánu přístavu nebo provoz díla nebo zařízení v rámci přístavu": {
          "Ano": {
            employees: {
              0: "Žádná regulace",
              1: "Žádná regulace",
              2: "Nižší regulace",
              3: "Vyšší regulace"
            },
            turnover: {
              0: "Žádná regulace",
              1: "Žádná regulace",
              2: "Nižší regulace",
              3: "Vyšší regulace"
            }
          },
          "Ne": "Žádná regulace"
        },
        "Provoz služby lodní dopravě (VTS)": {
            "Ano": {
              employees: {
                0: "Žádná regulace",
                1: "Žádná regulace",
                2: "Nižší regulace",
                3: "Vyšší regulace"
              },
              turnover: {
                0: "Žádná regulace",
                1: "Žádná regulace",
                2: "Nižší regulace",
                3: "Vyšší regulace"
              }
            },
            "Ne": "Žádná regulace"
          },

          "Výkon činnosti námořní vodní dopravy": {
            "Ano": {
              employees: {
                0: "Žádná regulace",
                1: "Žádná regulace",
                2: "Nižší regulace",
                3: "Vyšší regulace"
              },
              turnover: {
                0: "Žádná regulace",
                1: "Žádná regulace",
                2: "Nižší regulace",
                3: "Vyšší regulace"
              }
            },
            "Ne": "Žádná regulace"
          },
    },

    //Vodní hospodářství
    "Vodní hospodářství":{
        "Provozování kanalizace": {
            "Ano": {
                "Ano": { 
                    employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace",
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                },
                "Ne": { 
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Nižší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Nižší regulace", 
                    3: "Vyšší regulace" }
                }
            },
            "Ne": { 
                "Ano": { 
                    employees: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" },
                        turnover: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" }
                },
                "Ne": {
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" }
            }
        },
    },
    "Provozování vodovodu": {
            "Ano": {
                "Ano": { 
                    employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace",
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                },
                "Ne": { 
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Nižší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Nižší regulace", 
                    3: "Vyšší regulace" }
                }
            },
            "Ne": { 
                "Ano": { 
                    employees: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" },
                        turnover: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" }
                },
                "Ne": {
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" }
            }
        },
    },
},

//Vojensky prumysl
"Vojenský průmysl": {
      "Obchod s vojenským materiálem": {
        "Ano": {
          employees: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Nižší regulace",
            3: "Vyšší regulace"
          },
          turnover: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Nižší regulace",
            3: "Vyšší regulace"
          }
        },
        "Ne": "Žádná regulace"
      },
      "Výroba vojenského materiálu": {
        "Ano": {
          employees: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Nižší regulace",
            3: "Vyšší regulace"
          },
          turnover: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Nižší regulace",
            3: "Vyšší regulace"
          }
        },
        "Ne": "Žádná regulace"
      },
    },
//Výrobní průmysl
    "Výrobní průmysl": {
      "Výroba elektrických zařízení": {
        "Ano": {
          employees: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Nižší regulace",
            3: "Nižší regulace"
          },
          turnover: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Nižší regulace",
            3: "Nižší regulace"
          }
        },
        "Ne": "Žádná regulace"
      },
    "Výroba motorových vozidel (kromě motocyklů), přívěsů a návěsů": {
            "Ano": {
                "Ano": { 
                    employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace",
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                },
                "Ne": { 
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Nižší regulace", 
                    3: "Nižší regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Nižší regulace", 
                    3: "Nižší regulace" }
                }
            },
            "Ne": { 
                "Ano": { 
                    employees: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" },
                        turnover: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" }
                },
                "Ne": {
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" }
            }
        },
    },


    "Výroba ostatních dopravních prostředků a zařízení": {
            "Ano": {
          employees: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Nižší regulace",
            3: "Nižší regulace"
          },
          turnover: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Nižší regulace",
            3: "Nižší regulace"
          }
        },
        "Ne": "Žádná regulace"
      },

        "Výroba počítačů, elektronických a optických přístrojů a zařízení": {
            "Ano": {
          employees: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Nižší regulace",
            3: "Nižší regulace"
          },
          turnover: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Nižší regulace",
            3: "Nižší regulace"
          }
        },
        "Ne": "Žádná regulace"
      },

        "Výroba strojů a zařízení nezařazená pod jiné oddíly klasifikace CZ-NACE": {
           "Ano": {
          employees: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Nižší regulace",
            3: "Nižší regulace"
          },
          turnover: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Nižší regulace",
            3: "Nižší regulace"
          }
        },
        "Ne": "Žádná regulace"
      },
    
    },
    


}



/*
    "Digitální infrastruktura a služby": {
      "Poskytování platformy sociální sítě": {
        "Ano": {
          employees: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Nižší regulace",
            3: "Nižší regulace"
          },
          turnover: {
            0: "Žádná regulace",
            1: "Žádná regulace",
            2: "Nižší regulace",
            3: "Nižší regulace"
          }
        },
        "Ne": "Žádná regulace"
      },

      "Provoz přepravní soustavy plynu": {
            "Ano": { 
                employees: {
                    0: "Vyšší regulace",
                    1: "Vyšší regulace",
                    2: "Vyšší regulace",
                    3: "Vyšší regulace"
                },
                turnover: {
                    0: "Vyšší regulace",
                    1: "Vyšší regulace",
                    2: "Vyšší regulace",
                    3: "Vyšší regulace"
                }
            },
            "Ne": "Žádná regulace" 
        },
    },
    
    */

    //2 add otazky
    /*"Uskladňování plynu": {
            "Ano": {
                "Ano": { 
                    employees: { 
                    0: "Vyšší regulace", 
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Vyšší regulace",
                    1: "Vyšší regulace", 
                    2: "Vyšší regulace", 
                    3: "Vyšší regulace" }
                },
                "Ne": { 
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Nižší regulace", 
                    3: "Vyšší regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Nižší regulace", 
                    3: "Vyšší regulace" }
                }
            },
            "Ne": { 
                "Ano": { 
                    employees: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" },
                        turnover: { 
                        0: "Žádná regulace", 
                        1: "Žádná regulace", 
                        2: "Žádná regulace", 
                        3: "Žádná regulace" }
                },
                "Ne": {
                    employees: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" },
                    turnover: { 
                    0: "Žádná regulace", 
                    1: "Žádná regulace", 
                    2: "Žádná regulace", 
                    3: "Žádná regulace" }
            }
        },
    },
    */

  
  
  




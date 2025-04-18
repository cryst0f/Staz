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
            { text: "Vodní průmysl"},
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

  
  
  




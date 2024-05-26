/* *
 * We create a language strings object containing all of our strings.
 * The keys for each string will then be referenced in our code, e.g. handlerInput.t('WELCOME_MSG').
 * The localisation interceptor in index.js will automatically choose the strings
 * that match the request's locale.
 * */

module.exports = {
    en: {
        translation: {
            SPACE: 'Space',
            FOOTBALL: 'Football',
            SKILL_NAME: '%s Facts',
            GET_FACT_MESSAGE: 'Here\'s your fact : ',
            GET_FACT_MESSAGE_PERSONALIZED: 'Ok %s, Here\'s your fact : ',
            HELP_MESSAGE: 'You can say tell me a fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            FALLBACK_MESSAGE: 'The Facts skill can\'t help you with that.  It can help you discover facts if you say tell me a fact. What can I help you with?',
            FALLBACK_REPROMPT: 'What can I help you with?',
            ERROR_MESSAGE: 'Sorry, an error occurred.',
            PREFERENCE_ERROR: 'Sorry, I am unable to retrieve your personalized identity.',
            STOP_MESSAGE: 'Goodbye!',
            CONFIRMATION_MESSAGE: 'Ok %s, I have added %s as a favorite topic',
            SPACE_FACTS:
                [
                    'A year on Mercury is just 88 days long.',
                    'Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.',
                    'On Mars, the Sun appears about half the size as it does on Earth.',
                    'Jupiter has the shortest day of all the planets.',
                    'The Sun is an almost perfect sphere.',
                ],
            FOOTBALL_FACTS:
                [
                    'Football is the most watched and most played sport on earth.',
                    'The fastest goal ever scored took only 2.4 seconds.',
                    'Only 8 countries have won the World Cup.',
                ],
        }
    },
    es: {
        translation: {
            SPACE: 'Espacio',
            FOOTBALL: 'FÃºtbol',            
            SKILL_NAME: '%s Curiosidades',
            GET_FACT_MESSAGE: 'AquÃ­ estÃ¡ tu curiosidad: ',
            GET_FACT_MESSAGE_PERSONALIZED: 'Vale %s, AquÃ­ estÃ¡ tu curiosidad: ',
            HELP_MESSAGE: 'Puedes decir dime una curiosidad del espacio o puedes decir salir... CÃ³mo te puedo ayudar?',
            HELP_REPROMPT: 'Como te puedo ayudar?',
            FALLBACK_MESSAGE: 'La habilidad de Hechos no puede ayudarte con eso. Puede ayudarte a descubrir hechos si dices cuÃ©ntame un hecho. Â¿En quÃ© te puedo ayudar?',
            FALLBACK_REPROMPT: 'Como te puedo ayudar?',
            ERROR_MESSAGE: 'Lo sentimos, se ha producido un error.',
            PREFERENCE_ERROR: 'Lo siento, no puedo recuperar su identidad personalizada',
            STOP_MESSAGE: 'AdiÃ³s!',
            CONFIRMATION_MESSAGE: 'Vale %s, he aÃ±adido %s como curiosidad favorita.',
            SPACE_FACTS:
                [
                    'Un aÃ±o en Mercurio es de solo 88 dÃ­as',
                    'A pesar de estar mÃ¡s lejos del Sol, Venus tiene temperaturas mÃ¡s altas que Mercurio',
                    'En Marte el sol se ve la mitad de grande que en la Tierra',
                    'Jupiter tiene el dÃ­a mÃ¡s corto de todos los planetas',
                    'El sol es una esfÃ©ra casi perfecta',
                ],
            FOOTBALL_FACTS:
                [
                    'El fÃºtbol es el deporte mÃ¡s visto y mÃ¡s jugado del mundo.',
                    'El gol mÃ¡s rÃ¡pido jamÃ¡s marcado tomÃ³ solo 2.4 segundos',
                    'Solo 8 paÃ­ses han ganado la Copa del Mundo',
                ],
        }
    },
    de: {
        translation: {
            SPACE: 'Plads',
            FOOTBALL: 'Fodbold',            
            SKILL_NAME: '%s Fakten',
            GET_FACT_MESSAGE: 'Hier sind deine Fakten: ',
            GET_FACT_MESSAGE_PERSONALIZED: 'Ok %s, Hier sind deine Fakten: ',
            HELP_MESSAGE: 'Du kannst sagen, â€žNenne mir einen Fakt Ã¼ber den Weltraumâ€œ, oder du kannst â€žBeendenâ€œ sagen... Wie kann ich dir helfen?',
            HELP_REPROMPT: 'Wie kann ich dir helfen?',
            FALLBACK_MESSAGE: 'Fakta-fÃ¦rdigheden kan ikke hjÃ¦lpe dig med det. Det kan hjÃ¦lpe dig med at finde fakta, hvis du siger fortÃ¦l mig en kendsgerning. Hvad kan jeg hjÃ¦lpe dig med?',
            FALLBACK_REPROMPT: 'Wie kann ich dir helfen?',
            ERROR_MESSAGE: 'Es ist ein Fehler aufgetreten.',
            PREFERENCE_ERROR: 'Jeg kan desvÃ¦rre ikke hente din personlige identitet',
            STOP_MESSAGE: 'Auf Wiedersehen!',
            CONFIRMATION_MESSAGE: 'Ok %s, jeg har tilfÃ¸jet %s som et yndlingsemne.',
            SPACE_FACTS:
                [
                    'Ein Jahr dauert auf dem Merkur nur 88 Tage.',
                    'Die Venus ist zwar weiter von der Sonne entfernt, hat aber hÃ¶here Temperaturen als Merkur.',
                    'Venus dreht sich entgegen dem Uhrzeigersinn, mÃ¶glicherweise aufgrund eines frÃ¼heren ZusammenstoÃŸes mit einem Asteroiden.',
                    'Auf dem Mars erscheint die Sonne nur halb so groÃŸ wie auf der Erde.',
                    'Jupiter hat den kÃ¼rzesten Tag aller Planeten.',
                ],
            FOOTBALL_FACTS:
                [
                    'Fodbold er den mest sete og mest spillede sport pÃ¥ jorden.',
                    'Det hurtigste mÃ¥l, der nogensinde blev scoret, tog kun 2,4 sekunder.',
                    'Kun 8 lande har vundet verdensmesterskabet.',
                ],
        }
    },
    ja: {
        translation: {
            SPACE: 'ã‚¹ãƒšãƒ¼ã‚¹',
            FOOTBALL: 'ãƒ•ãƒƒãƒˆãƒœãƒ¼ãƒ«',            
            SKILL_NAME: '%s æ—¥æœ¬èªžç‰ˆè±†çŸ¥è­˜',
            GET_FACT_MESSAGE: 'çŸ¥ã£ã¦ã¾ã—ãŸã‹ï¼Ÿ',
            GET_FACT_MESSAGE_PERSONALIZED: 'ã‚ã‹ã‚Šã¾ã—ãŸ%sã“ã“ã«ã‚ãªãŸã®äº‹å®ŸãŒã‚ã‚Šã¾ã™',
            HELP_MESSAGE: 'è±†çŸ¥è­˜ã‚’èžããŸã„æ™‚ã¯ã€Œè±†çŸ¥è­˜ã€ã¨ã€çµ‚ã‚ã‚ŠãŸã„æ™‚ã¯ã€ŒãŠã—ã¾ã„ã€ã¨è¨€ã£ã¦ãã ã•ã„ã€‚ã©ã†ã—ã¾ã™ã‹ï¼Ÿ',
            HELP_REPROMPT: 'ã©ã†ã—ã¾ã™ã‹ï¼Ÿ',
            ERROR_MESSAGE: 'ç”³ã—è¨³ã‚ã‚Šã¾ã›ã‚“ãŒã€ã‚¨ãƒ©ãƒ¼ãŒç™ºç”Ÿã—ã¾ã—ãŸ',
            PREFERENCE_ERROR: 'ç”³ã—è¨³ã‚ã‚Šã¾ã›ã‚“ãŒã€å€‹äººã®IDã‚’å–å¾—ã§ãã¾ã›ã‚“',
            STOP_MESSAGE: 'ã•ã‚ˆã†ãªã‚‰',
            CONFIRMATION_MESSAGE: 'ã‚ã‹ã‚Šã¾ã—ãŸ%sã€ãŠæ°—ã«å…¥ã‚Šã®ãƒˆãƒ”ãƒƒã‚¯ã¨ã—ã¦%sã‚’è¿½åŠ ã—ã¾ã—ãŸ',
            SPACE_FACTS:
                [
                    'æ°´æ˜Ÿã®ä¸€å¹´ã¯ãŸã£ãŸ88æ—¥ã§ã™ã€‚',
                    'é‡‘æ˜Ÿã¯æ°´æ˜Ÿã¨æ¯”ã¹ã¦å¤ªé™½ã‚ˆã‚Šé ãã«ã‚ã‚Šã¾ã™ãŒã€æ°—æ¸©ã¯æ°´æ˜Ÿã‚ˆã‚Šã‚‚é«˜ã„ã§ã™ã€‚',
                    'é‡‘æ˜Ÿã¯åæ™‚è¨ˆå›žã‚Šã«è‡ªè»¢ã—ã¦ã„ã¾ã™ã€‚éŽåŽ»ã«èµ·ã“ã£ãŸéš•çŸ³ã®è¡çªãŒåŽŸå› ã¨è¨€ã‚ã‚Œã¦ã„ã¾ã™ã€‚',
                    'ç«æ˜Ÿä¸Šã‹ã‚‰è¦‹ã‚‹ã¨ã€å¤ªé™½ã®å¤§ãã•ã¯åœ°çƒã‹ã‚‰è¦‹ãŸå ´åˆã®ç´„åŠåˆ†ã«è¦‹ãˆã¾ã™ã€‚',
                    'æœ¨æ˜Ÿã®<sub alias="ã„ã¡ã«ã¡">1æ—¥</sub>ã¯å…¨æƒ‘æ˜Ÿã®ä¸­ã§ä¸€ç•ªçŸ­ã„ã§ã™ã€‚',
                    'å¤©ã®å·éŠ€æ²³ã¯ç´„50å„„å¹´å¾Œã«ã‚¢ãƒ³ãƒ‰ãƒ­ãƒ¡ãƒ€æ˜Ÿé›²ã¨è¡çªã—ã¾ã™ã€‚',
                ],
            FOOTBALL_FACTS:
                [
                    'ã‚µãƒƒã‚«ãƒ¼ã¯ã€åœ°çƒä¸Šã§æœ€ã‚‚æ³¨ç›®ã•ã‚Œã€æœ€ã‚‚ãƒ—ãƒ¬ã‚¤ã•ã‚Œã¦ã„ã‚‹ã‚¹ãƒãƒ¼ãƒ„ã§ã™',
                    'ã“ã‚Œã¾ã§ã«å¾—ç‚¹ã—ãŸæœ€é€Ÿã®ã‚´ãƒ¼ãƒ«ã¯ã‚ãšã‹2.4ç§’ã§ã—ãŸ',
                    'ãƒ¯ãƒ¼ãƒ«ãƒ‰ã‚«ãƒƒãƒ—ã§å„ªå‹ã—ãŸã®ã¯8ã‹å›½ã ã‘ã§ã™',
                ],
        }
    },
    fr: {
        translation: {
            SPACE: 'Espace',
            FOOTBALL: 'Football',            
            SKILL_NAME: '%s Anecdotes',
            GET_FACT_MESSAGE: 'Voici votre anecdote : ',
            GET_FACT_MESSAGE_PERSONALIZED: 'Ok %s, Voici votre anecdote : ',
            HELP_MESSAGE: 'Vous pouvez dire donne-moi une anecdote, ou, vous pouvez dire stop... Comment puis-je vous aider?',
            HELP_REPROMPT: 'Comment puis-je vous aider?',
            FALLBACK_MESSAGE: 'La compÃ©tence Faits ne peut pas vous aider. Cela peut vous aider Ã  dÃ©couvrir des faits si vous dites dites-moi un fait. En quoi puis-je vous aider?',
            FALLBACK_REPROMPT: 'Comment puis-je vous aider?',
            ERROR_MESSAGE: 'DÃ©solÃ©, une erreur est survenue.',
            PREFERENCE_ERROR: 'DÃ©solÃ©, je n\'arrive pas Ã  rÃ©cupÃ©rer votre identitÃ© personnalisÃ©e',
            STOP_MESSAGE: 'Au revoir!',
            CONFIRMATION_MESSAGE: 'Ok %s, j\'ai ajoutÃ© %s comme sujet favori.',
            SPACE_FACTS:
                [
                    'Une annÃ©e sur Mercure ne dure que 88 jours.',
                    'En dÃ©pit de son Ã©loignement du Soleil, VÃ©nus connaÃ®t des tempÃ©ratures plus Ã©levÃ©es que sur Mercure.',
                    'Sur Mars, le Soleil apparaÃ®t environ deux fois plus petit que sur Terre.',
                    'De toutes les planÃ¨tes, Jupiter a le jour le plus court.',
                    'Le Soleil est une sphÃ¨re presque parfaite.',
                ],
            FOOTBALL_FACTS:
                [
                    'Le football est le sport le plus regardÃ© et le plus pratiquÃ© sur terre.',
                    'Le but le plus rapide jamais marquÃ© n\'a pris que 2,4 secondes.',
                    'Seuls 8 pays ont remportÃ© la Coupe du monde.',
                ],
        }
    },
    it: {
        translation: {
            SPACE: 'Spazio',
            FOOTBALL: 'Calcio',            
            SKILL_NAME: '%s Aneddoti',
            GET_FACT_MESSAGE: 'Ecco il tuo aneddoto: ',
            GET_FACT_MESSAGE_PERSONALIZED: 'Ok %s ,Ecco il tuo aneddoto: ',
            HELP_MESSAGE: 'Puoi chiedermi un aneddoto dallo spazio o puoi chiudermi dicendo "esci"... Come posso aiutarti?',
            HELP_REPROMPT: 'Come posso aiutarti?',
            FALLBACK_MESSAGE: 'L\'abilitÃ  Fatti non puÃ² aiutarti in questo. PuÃ² aiutarti a scoprire i fatti se dici dimmi un fatto. In cosa posso aiutarti?',
            FALLBACK_REPROMPT: 'Come posso aiutarti?',
            ERROR_MESSAGE: 'Spiacenti, si Ã¨ verificato un errore.',
            PREFERENCE_ERROR: 'Mi dispiace, non riesco a recuperare la tua identitÃ  personalizzata',
            STOP_MESSAGE: 'A presto!',
            CONFIRMATION_MESSAGE: 'Ok %s, ho aggiunto %s come argomento preferito',
            SPACE_FACTS:
                [
                    'Sul pianeta Mercurio, un anno dura solamente 88 giorni.',
                    'Pur essendo piÃ¹ lontana dal Sole, Venere ha temperature piÃ¹ alte di Mercurio.',
                    'Su Marte il sole appare grande la metÃ  che su la terra. ',
                    'Tra tutti i pianeti del sistema solare, la giornata piÃ¹ corta Ã¨ su Giove.',
                    'Il Sole Ã¨ quasi una sfera perfetta.',
                ],
            FOOTBALL_FACTS:
                [
                    'Il calcio Ã¨ lo sport piÃ¹ seguito e piÃ¹ giocato al mondo.',
                    'Il gol piÃ¹ veloce mai segnato ha richiesto solo 2,4 secondi.',
                    'Solo 8 paesi hanno vinto la Coppa del Mondo.',
                ],
        }
    },
    pt: {
        translation: {
            SPACE: 'EspaÃ§o',
            FOOTBALL: 'Futebol',            
            SKILL_NAME: '%s Fatos',
            GET_FACT_MESSAGE: 'Aqui vai: ',
            GET_FACT_MESSAGE_PERSONALIZED: 'Ok %s Aqui vai: ',
            HELP_MESSAGE: 'VocÃª pode me perguntar por um fato interessante sobre o espaÃ§o, ou, fexar a skill. Como posso ajudar?',
            HELP_REPROMPT: 'O que vai ser?',
            FALLBACK_MESSAGE: 'A habilidade Fatos nÃ£o pode ajudÃ¡-lo com isso. Pode ajudÃ¡-lo a descobrir fatos, se vocÃª disser conte-me um fato. Com o que posso ajudar?',
            FALLBACK_REPROMPT: 'Eu posso contar fatos sobre o espaÃ§o. Como posso ajudar?',
            ERROR_MESSAGE: 'Desculpa, algo deu errado.',
            PREFERENCE_ERROR: 'NÃ£o consigo recuperar sua identidade personalizada',
            STOP_MESSAGE: 'Tchau!',
            CONFIRMATION_MESSAGE: 'Ok %s, adicionei %s como um tÃ³pico favorito',
            SPACE_FACTS:
                [
                    'Um ano em MercÃºrio sÃ³ dura 88 dias.',
                    'Apesar de ser mais distante do sol, Venus Ã© mais quente que MercÃºrio.',
                    'Visto de marte, o sol parece ser metade to tamanho que nÃ³s vemos da terra.',
                    'JÃºpiter tem os dias mais curtos entre os planetas no nosso sistema solar.',
                    'O sol Ã© quase uma esfera perfeita.',
                ],
            FOOTBALL_FACTS:
                [
                    'O futebol Ã© o esporte mais assistido e praticado no planeta.',
                    'O gol mais rÃ¡pido jÃ¡ marcado levou apenas 2,4 segundos',
                    'Apenas 8 paÃ­ses ganharam a Copa do Mundo',
                ],
        }
    },
    hi: {
        translation: {
            SPACE: 'à¤…à¤‚à¤¤à¤°à¤¿à¤•à¥à¤·à¤¾à¤¨',
            FOOTBALL: 'Football',          
            SKILL_NAME: '%s facts',
            GET_FACT_MESSAGE: 'à¤¯à¥‡ à¤²à¥€à¤œà¤¿à¤ à¤†à¤ªà¤•à¤¾ fact: ',
            GET_FACT_MESSAGE_PERSONALIZED: 'à¤ à¥€à¤• à¤¹à¥ˆ %s, à¤¯à¥‡ à¤²à¥€à¤œà¤¿à¤ à¤†à¤ªà¤•à¤¾ fact: ',
            HELP_MESSAGE: 'à¤†à¤ª à¤®à¥à¤à¥‡ à¤¨à¤¯à¤¾ fact à¤¸à¥à¤¨à¤¾à¤“ à¤¬à¥‹à¤² à¤¸à¤•à¤¤à¥‡ à¤¹à¥ˆà¤‚ à¤¯à¤¾ à¤«à¤¿à¤° exit à¤­à¥€ à¤¬à¥‹à¤² à¤¸à¤•à¤¤à¥‡ à¤¹à¥ˆà¤‚... à¤†à¤ª à¤•à¥à¤¯à¤¾ à¤•à¤°à¤¨à¤¾ à¤šà¤¾à¤¹à¥‡à¤‚à¤—à¥‡?',
            HELP_REPROMPT: 'à¤®à¥ˆà¤‚ à¤†à¤ªà¤•à¥€ à¤•à¤¿à¤¸ à¤ªà¥à¤°à¤•à¤¾à¤° à¤¸à¥‡ à¤¸à¤¹à¤¾à¤¯à¤¤à¤¾ à¤•à¤° à¤¸à¤•à¤¤à¥€ à¤¹à¥‚à¤?',
            ERROR_MESSAGE: 'à¤¸à¥‰à¤°à¥€, à¤®à¥ˆà¤‚ à¤µà¥‹ à¤¸à¤®à¤œ à¤¨à¤¹à¥€à¤‚ à¤ªà¤¾à¤¯à¥€. à¤•à¥à¤¯à¤¾ à¤†à¤ª repeat à¤•à¤° à¤¸à¤•à¤¤à¥‡ à¤¹à¥ˆà¤‚?',
            PREFERENCE_ERROR: 'à¤•à¥à¤·à¤®à¤¾ à¤•à¤°à¥‡à¤‚, à¤®à¥ˆà¤‚ à¤†à¤ªà¤•à¥€ à¤µà¥à¤¯à¤•à¥à¤¤à¤¿à¤—à¤¤ à¤ªà¤¹à¤šà¤¾à¤¨ à¤ªà¥à¤¨à¤ƒ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¤¨à¥‡ à¤®à¥‡à¤‚ à¤…à¤¸à¤®à¤°à¥à¤¥ ',
            STOP_MESSAGE: 'à¤…à¤šà¥à¤›à¤¾ bye, à¤«à¤¿à¤° à¤®à¤¿à¤²à¤¤à¥‡ à¤¹à¥ˆà¤‚',
            CONFIRMATION_MESSAGE: 'à¤ à¥€à¤• à¤¹à¥ˆ %s, à¤®à¥ˆà¤‚à¤¨à¥‡ %s à¤•à¥‹ à¤ªà¤¸à¤‚à¤¦à¥€à¤¦à¤¾ à¤µà¤¿à¤·à¤¯ à¤•à¥‡ à¤°à¥‚à¤ª à¤®à¥‡à¤‚ à¤œà¥‹à¤¡à¤¼à¤¾ à¤¹à¥ˆ',
            SPACE_FACTS:
                [
                    'à¤¬à¥à¤§ à¤—à¥ƒà¤¹ à¤®à¥‡à¤‚ à¤à¤• à¤¸à¤¾à¤² à¤®à¥‡à¤‚ à¤•à¥‡à¤µà¤² à¤…à¤ à¤¾à¤¸à¥€ à¤¦à¤¿à¤¨ à¤¹à¥‹à¤¤à¥‡ à¤¹à¥ˆà¤‚',
                    'à¤¸à¥‚à¤°à¤œ à¤¸à¥‡ à¤¦à¥‚à¤° à¤¹à¥‹à¤¨à¥‡ à¤•à¥‡ à¤¬à¤¾à¤µà¤œà¥‚à¤¦, Venus à¤•à¤¾ à¤¤à¤¾à¤ªà¤®à¤¾à¤¨ Mercury à¤¸à¥‡ à¤œà¤¼à¥à¤¯à¤¾à¤¦à¤¾ à¤¹à¥‹à¤¤à¤¾ à¤¹à¥ˆà¤‚',
                    'Earth à¤•à¥‡ à¤¤à¥à¤²à¤¨à¤¾ à¤¸à¥‡ Mars à¤®à¥‡à¤‚ à¤¸à¥‚à¤°à¤œ à¤•à¤¾ size à¤¤à¤•à¤¼à¤°à¥€à¤¬à¤¨ à¤†à¤§à¤¾ à¤¹à¥ˆà¤‚',
                    'à¤¸à¤¾à¤°à¥‡ à¤—à¥à¤°à¤¹à¥‹à¤‚ à¤®à¥‡à¤‚ Jupiter à¤•à¤¾ à¤¦à¤¿à¤¨ à¤¸à¤¬à¤¸à¥‡ à¤•à¤® à¤¹à¥ˆà¤‚',
                    'à¤¸à¥‚à¤°à¤œ à¤•à¤¾ shape à¤à¤•à¤¦à¤® à¤—à¥‡à¤‚à¤¦ à¤†à¤•à¤¾à¤° à¤®à¥‡à¤‚ à¤¹à¥ˆà¤‚'
                ],
            FOOTBALL_FACTS:
                [
                    'à¤«à¥à¤Ÿà¤¬à¥‰à¤² à¤§à¤°à¤¤à¥€ à¤ªà¤° à¤¸à¤¬à¤¸à¥‡ à¤œà¥à¤¯à¤¾à¤¦à¤¾ à¤¦à¥‡à¤–à¤¾ à¤œà¤¾à¤¨à¥‡ à¤µà¤¾à¤²à¤¾ à¤”à¤° à¤¸à¤¬à¤¸à¥‡ à¤œà¥à¤¯à¤¾à¤¦à¤¾ à¤–à¥‡à¤²à¤¾ à¤œà¤¾à¤¨à¥‡ à¤µà¤¾à¤²à¤¾ à¤–à¥‡à¤² à¤¹à¥ˆ',
                    'à¤…à¤¬ à¤¤à¤• à¤•à¤¾ à¤¸à¤¬à¤¸à¥‡ à¤¤à¥‡à¤œà¤¼ à¤—à¥‹à¤² à¤•à¤°à¤¨à¥‡ à¤®à¥‡à¤‚ à¤•à¥‡à¤µà¤² 2.4 à¤¸à¥‡à¤•à¤‚à¤¡ à¤•à¤¾ à¤¸à¤®à¤¯ à¤²à¤—à¤¾',
                    'à¤•à¥‡à¤µà¤² 8 à¤¦à¥‡à¤¶à¥‹à¤‚ à¤¨à¥‡ à¤µà¤¿à¤¶à¥à¤µ à¤•à¤ª à¤œà¥€à¤¤à¤¾ à¤¹à¥ˆ',
                ],
        }
    },
    ar: {
        translation: {
            SPACE: 'ÙØ¶Ø§Ø¡',
            FOOTBALL: 'ÙƒØ±Ø© Ø§Ù„Ù‚Ø¯Ù…',            
            SKILL_NAME: '%s Ø­Ù‚ÙŠÙ‚Ø©',
            GET_FACT_MESSAGE: 'Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø© Ø§Ù„ÙŠÙˆÙ… Ù‡ÙŠ',
            GET_FACT_MESSAGE_PERSONALIZED: 'Ø­Ø³Ù†Ù‹Ø§ %s Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„ÙŠÙˆÙ… Ù‡ÙŠ',
            HELP_MESSAGE: 'ØªÙ‚Ø¯Ø± ØªÙ‚ÙˆÙ„ Ø£Ø­ÙƒÙŠ Ù„ÙŠ Ù…Ø¹Ù„ÙˆÙ…Ø© Ø¹Ù† Ø§Ù„ÙØ¶Ø§Ø¡ Ø£Ùˆ ØªÙ‚Ø¯Ø± ØªÙ‚ÙˆÙ„ Ø®Ù„Ø§Øµ Ù„Ù„Ø®Ø±ÙˆØ¬ Ù…Ù† Ø§Ù„Ù„Ø¹Ø¨Ø©. ÙƒÙŠÙ Ù…Ù…ÙƒÙ† Ø£Ø³Ø§Ø¹Ø¯ÙƒØŸ',
            HELP_REPROMPT: 'ÙƒÙŠÙ Ø£Ù‚Ø¯Ø± Ø£Ø³Ø§Ø¹Ø¯ÙƒØŸ',
            FALLBACK_MESSAGE: 'Ù…Ù‡Ø§Ø±Ø© Ø§Ù„Ø­Ù‚Ø§Ø¦Ù‚ Ù„Ø§ ÙŠÙ…ÙƒÙ† Ø£Ù† ØªØ³Ø§Ø¹Ø¯Ùƒ ÙÙŠ Ø°Ù„Ùƒ. ÙŠÙ…ÙƒÙ† Ø£Ù† ÙŠØ³Ø§Ø¹Ø¯Ùƒ ÙÙŠ Ø§ÙƒØªØ´Ø§Ù Ø§Ù„Ø­Ù‚Ø§Ø¦Ù‚ Ø¥Ø°Ø§ Ù‚Ù„Øª Ù‚Ù„ Ù„ÙŠ Ø­Ù‚ÙŠÙ‚Ø©. Ø¨Ù…Ø§Ø°Ø§ ÙŠÙ…ÙƒÙ†Ù†ÙŠ Ù…Ø³Ø§Ø¹Ø¯ØªÙƒØŸ',
            FALLBACK_REPROMPT: 'ÙƒÙŠÙ Ø£Ù‚Ø¯Ø± Ø£Ø³Ø§Ø¹Ø¯ÙƒØŸ',
            ERROR_MESSAGE: 'Ø£Ø¹ØªØ°Ø±ØŒ Ø­Ø¯Ø« Ø®Ø·Ø£.',
            PREFERENCE_ERROR: 'Ø¹Ø°Ø±Ù‹Ø§ ØŒ Ù„Ø§ ÙŠÙ…ÙƒÙ†Ù†ÙŠ Ø§Ø³ØªØ±Ø¯Ø§Ø¯ Ù‡ÙˆÙŠØªÙƒ Ø§Ù„Ø´Ø®ØµÙŠØ©',
            STOP_MESSAGE: 'Ù…Ø¹ Ø§Ù„Ø³Ù„Ø§Ù…Ø©',
            CONFIRMATION_MESSAGE: 'Ø­Ø³Ù†Ù‹Ø§ %s ØŒ Ù„Ù‚Ø¯ Ø£Ø¶ÙØª %s ÙƒÙ…ÙˆØ¶ÙˆØ¹ Ø­Ù‚Ø§Ø¦Ù‚ Ù…ÙØ¶Ù„',
            SPACE_FACTS:
                [
                    'Ø¹Ø¯Ø¯ Ø£ÙŠØ§Ù… Ø§Ù„Ø³Ù†Ø© Ø¹Ù„Ù‰ Ø¹Ø·Ø§Ø±Ø¯ Ù‡Ùˆ 88 ÙŠÙˆÙ… ÙÙ‚Ø·.',
                    'Ø¹Ù„Ù‰ Ø§Ù„Ø±ØºÙ… Ù…Ù† ÙƒÙˆÙ† ÙƒÙˆÙƒØ¨ Ø§Ù„Ø²Ù‡Ø±Ø© Ø¨Ø¹ÙŠØ¯ Ø¹Ù† Ø§Ù„Ø´Ù…Ø³ØŒ Ø¥Ù„Ø§ Ø£Ù†Ù‡ ÙŠØ¹Ø§Ù†ÙŠ Ù…Ù† Ø¯Ø±Ø¬Ø§Øª Ø­Ø±Ø§Ø±Ø© Ø£Ø¹Ù„Ù‰ Ù…Ù† ØªÙ„Ùƒ Ø¹Ù„Ù‰ Ø¹Ø·Ø§Ø±Ø¯.',
                    'Ø¹Ù„Ù‰ Ø³Ø·Ø­ Ø§Ù„Ù…Ø±ÙŠØ®ØŒ ØªØ¸Ù‡Ø± Ø§Ù„Ø´Ù…Ø³ Ø­ÙˆØ§Ù„ÙŠ Ù†ØµÙ Ø§Ù„Ø­Ø¬Ù… Ø§Ù„Ø°ÙŠ Ù†Ø±Ø§Ù‡ Ù…Ù† Ø³Ø·Ø­ Ø§Ù„Ø£Ø±Ø¶.',
                    'ÙƒÙˆÙƒØ¨ Ø§Ù„Ù…Ø´ØªØ±ÙŠ Ù„Ø¯ÙŠÙ‡ Ø£Ù‚ØµØ± ÙŠÙˆÙ… Ø¨ÙŠÙ† Ø¬Ù…ÙŠØ¹ Ø§Ù„ÙƒÙˆØ§ÙƒØ¨.',
                    'ÙŠÙƒØ§Ø¯ ÙŠÙƒÙˆÙ† Ø´ÙƒÙ„ Ø§Ù„Ø´Ù…Ø³ ÙƒØ±Ø© Ù…Ø«Ø§Ù„ÙŠØ©.'
                ],
            FOOTBALL_FACTS:
                [
                    'ÙƒØ±Ø© Ø§Ù„Ù‚Ø¯Ù… Ù‡ÙŠ Ø§Ù„Ø±ÙŠØ§Ø¶Ø© Ø§Ù„Ø£ÙƒØ«Ø± Ù…Ø´Ø§Ù‡Ø¯Ø© ÙˆØ§Ù„Ø£ÙƒØ«Ø± Ù„Ø¹Ø¨Ù‹Ø§ Ø¹Ù„Ù‰ ÙˆØ¬Ù‡ Ø§Ù„Ø£Ø±Ø¶',
                    'Ø£Ø³Ø±Ø¹ Ù‡Ø¯Ù ØªÙ… ØªØ³Ø¬ÙŠÙ„Ù‡ Ø§Ø³ØªØºØ±Ù‚ 2.4 Ø«Ø§Ù†ÙŠØ© ÙÙ‚Ø·',
                    'ÙØ§Ø²Øª 8 Ø¯ÙˆÙ„ ÙÙ‚Ø· Ø¨ÙƒØ£Ø³ Ø§Ù„Ø¹Ø§Ù„Ù…',
                ],
        }
    },
    nl: {
        translation: {
            SPACE: 'ruimte',
            FOOTBALL: 'voetbal',
            SKILL_NAME: '%s Feiten',
            GET_FACT_MESSAGE: 'Dit is jouw feitje : ',
            GET_FACT_MESSAGE_PERSONALIZED: 'OkÃ© %s, hier is je feitje : ',
            HELP_MESSAGE: 'Je kunt zeggen : vertel me een feitje, of je kunt zeggen : stop... Waar kan ik je mee helpen?',
            HELP_REPROMPT: 'Waar kan ik je mee helpen?',
            FALLBACK_MESSAGE: 'De Feiten Skill kan je daarbij niet helpen. Het kan je helpen met het ontdekken van feitjes als je zegt : vertel mij een feitje. Waar kan ik je mee helpen?',
            FALLBACK_REPROMPT: 'Waar kan ik je mee helpen?',
            ERROR_MESSAGE: 'Sorry, er is een fout opgetreden.',
            PREFERENCE_ERROR: 'Sorry, ik kan je persoonlijke identiteit niet achterhalen.',
            STOP_MESSAGE: 'Tot ziens!',
            CONFIRMATION_MESSAGE: 'OkÃ© %s, ik heb %s toegevoegd als favoriet onderwerp',
            SPACE_FACTS:
                [
                    'Een jaar op Mercurius duurt slechts 88 dagen.',
                    'Ondanks dat Venus verder van de zon staat, heeft Venus hogere temperaturen dan Mercurius.',
                    'Op Mars lijkt de zon ongeveer half zo groot als op aarde.',
                    'Jupiter heeft de kortste dag van alle planeten.',
                    'De zon is een bijna perfecte bol.',
                ],
            FOOTBALL_FACTS:
                [
                    'Voetbal is de meest bekeken en meest gespeelde sport op aarde.',
                    'Het snelste doelpunt ooit gescoord duurde slechts 2,4 seconden.',
                    'Slechts acht landen hebben het WK gewonnen.',
                ],
        }
    }
}

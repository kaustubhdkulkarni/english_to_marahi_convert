// document.getElementById("to-marathi-button").addEventListener("click", function() {
//     switchToMarathiKeyboard();
// });

// document.getElementById("validate-button").addEventListener("click", function() {
//     validateText();
// });

// document.getElementById("english-input").addEventListener("input", function() {
//     updateRealtimeConversion();
// });

// function switchToMarathiKeyboard() {
//     const englishInput = document.getElementById("english-input");
//     const marathiInput = document.getElementById("marathi-input");

//     marathiInput.value = "";  // Clear Marathi input
//     marathiInput.disabled = false;  // Enable Marathi input

//     // Call the function to update real-time conversion when switching to Marathi
//     updateRealtimeConversion();
// }

// function updateRealtimeConversion() {
//     const englishInput = document.getElementById("english-input").value;
//     const marathiInput = document.getElementById("marathi-input");
    
//     // Update Marathi input in real-time as the user types
//     marathiInput.value = convertToMarathi(englishInput);
// }

// function convertToMarathi(englishText) {
//     const remingtonMapping = {
//         'q': 'ु',
//         'w': 'ू',
//         'e': 'म',
//         'r': 'त',
//         't': 'ज',
//         'y': 'ल',
//         'u': 'न',
//         'i': 'प',
//         'o': 'व',
//         'p': 'च',
//         'a': 'ं',
//         's': 'े',
//         'd': 'क',
//         'f': 'ि',
//         'g': 'ह',
//         'h': 'ी',
//         'j': 'र',
//         'k': 'ा',
//         'l': 'स',
//         'z': '',
//         'x': 'ग',
//         'c': 'ब',
//         'v': 'अ',
//         'b': 'इ',
//         'n': 'द',
//         'm': 'उ',
//         '`':'ृ',
//         '1':'१',
//         '2':'२',
//         '3':'३',
//         '4':'४',
//         '5':'५',
//         '6':'६',
//         '7':'७',
//         '8':'८',
//         '9':'९',
//         '0':'०',
//         '-':'.',
//         '=':'.',
//         '\\':'ृ',
//         '[':'ख्',
//         ']':'.',
//         ';':'य',
//         "/'":'श्',
//         ',':'ए',
//         '.':'ण्',
//         '/':'ध्',
        
        
//         'Q': 'फ',
//         'W': 'ॅ',
//         'E': 'म्',
//         'R': 'त्',
//         'T': 'ज्',
//         'Y': 'ल्',
//         'U': 'न्',
//         'I': 'प्',
//         'O': 'व्',
//         'P': 'च्',
//         'A': 'ा',
//         'S': 'ै',
//         'D': 'क्',
//         'F': 'थ्',
//         'G': 'ळ',
//         'H': 'भ्',
//         'J': 'श्र',
//         'K': 'ज्ञ',
//         'L': 'स्',
//         'Z': 'र्',
//         'X': 'ग्',
//         'C': 'ब्',
//         'V': 'ट',
//         'B': 'ठ',
//         'N': 'छ',
//         'M': 'ड',
//         '`':'्र',
//         '!':'ङ',
//         '@':'/',
//         '#':':',
//         '$':'ऱ्',
//         '%':'-',
//         '^':'“',
//         '&':'(',
//         '*':')',
//         '(':'त्र',
//         ')':'ऋ',
//         '_':'‘',
//         '+':'द्य',
//         '|':'्',
//         '{':'क्ष्',
//         '}':'द्व',
//         ':':'य्',
//         '/"':'ष्',
//         '<':'ढ',
//         '>':'झ्',
//         '?':'घ्'

//     };

//     const marathiTextArray = englishText.split('').map(char => {
//         return remingtonMapping[char] || char;
//     });

//     return marathiTextArray.join('');
// }

// function validateText() {
//     const englishInput = document.getElementById("english-input").value.trim();
//     const marathiInput = document.getElementById("marathi-input").value.trim();
//     const resultContainer = document.getElementById("result-container");
//     const resultMessage = document.getElementById("result-message");

//     if (englishInput === marathiInput) {
//         resultMessage.textContent = "Correct! The text is the same in both languages.";
//     } else {
//         resultMessage.textContent = "Incorrect! The text does not match in both languages.";
//     }

//     resultContainer.style.display = "block";
// }



document.getElementById("to-marathi-button").addEventListener("click", function() {
    switchToMarathiKeyboard();
});

document.getElementById("validate-button").addEventListener("click", function() {
    validateText();
});

document.getElementById("english-input").addEventListener("input", function() {
    updateRealtimeConversion();
});

function switchToMarathiKeyboard() {
    const englishInput = document.getElementById("english-input");
    const marathiInput = document.getElementById("marathi-input");

    marathiInput.value = "";  // Clear Marathi input
    marathiInput.disabled = false;  // Enable Marathi input

    updateRealtimeConversion();
}
function updateRealtimeConversion() {
    const englishInput = document.getElementById("english-input").value;
    const marathiInput = document.getElementById("marathi-input");
    marathiInput.value = convertToMarathi(englishInput);
}

function convertToMarathi(englishText) {
    const remingtonMapping = {
        'q': 'ु',
        'w': 'ू',
        'e': 'म',
        'r': 'त',
        't': 'ज',
        'y': 'ल',
        'u': 'न',
        'i': 'प',
        'o': 'व',
        'p': 'च',
        'a': 'ं',
        's': 'े',
        'd': 'क',
        'f': 'ि',
        'g': 'ह',
        'h': 'ी',
        'j': 'र',
        'k': 'ा',
        'l': 'स',
        'z': '',
        'x': 'ग',
        'c': 'ब',
        'v': 'अ',
        'b': 'इ',
        'n': 'द',
        'm': 'उ',
        '`':'ृ',
        '1':'१',
        '2':'२',
        '3':'३',
        '4':'४',
        '5':'५',
        '6':'६',
        '7':'७',
        '8':'८',
        '9':'९',
        '0':'०',
        '-':'.',
        '=':'.',
        '\\':'ृ',
        '[':'ख्',
        ']':'.',
        ';':'य',
        "/'":'श्',
        ',':'ए',
        '.':'ण्',
        '/':'ध्',
        
        
        'Q': 'फ',
        'W': 'ॅ',
        'E': 'म्',
        'R': 'त्',
        'T': 'ज्',
        'Y': 'ल्',
        'U': 'न्',
        'I': 'प्',
        'O': 'व्',
        'P': 'च्',
        'A': 'ा',
        'S': 'ै',
        'D': 'क्',
        'F': 'थ्',
        'G': 'ळ',
        'H': 'भ्',
        'J': 'श्र',
        'K': 'ज्ञ',
        'L': 'स्',
        'Z': 'र्',
        'X': 'ग्',
        'C': 'ब्',
        'V': 'ट',
        'B': 'ठ',
        'N': 'छ',
        'M': 'ड',
        '`':'्र',
        '!':'ङ',
        '@':'/',
        '#':':',
        '$':'ऱ्',
        '%':'-',
        '^':'“',
        '&':'(',
        '*':')',
        '(':'त्र',
        ')':'ऋ',
        '_':'‘',
        '+':'द्य',
        '|':'्',
        '{':'क्ष्',
        '}':'द्व',
        ':':'य्',
        '/"':'ष्',
        '<':'ढ',
        '>':'झ्',
        '?':'घ्',
        ' ':' ',

    };

    // const marathiTextArray = englishText.split('').map(char => {
    //     return remingtonMapping[char] || char;
    // });
     
    const a=[];
    for(let i=0;i<englishText.length;i++)
    {
        if(englishText[i]=='f' && i!=englishText.length-1)
        {
                a[i]=remingtonMapping[englishText[i+1]]+remingtonMapping[englishText[i]];
                i++;
        }
        else{
            a[i]=remingtonMapping[englishText[i]] || englishText[i];
        }
    }
    return a.join('');
}

function validateText() {
    const englishInput = document.getElementById("english-input").value.trim();
    const marathiInput = document.getElementById("marathi-input").value.trim();
    const resultContainer = document.getElementById("result-container");
    const resultMessage = document.getElementById("result-message");

    if (englishInput === marathiInput) {
        resultMessage.textContent = "Correct! The text is the same in both languages.";
    } else {
        resultMessage.textContent = "Incorrect! The text does not match in both languages.";
    }

    resultContainer.style.display = "block";
}
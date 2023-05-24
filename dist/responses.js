function getBotResponse(input) { 
    //greetings responses

    if (input.toLowerCase().includes("hello") || input.toLowerCase().includes("hi")) {
        return "Hello! How can I assist you today?";
      } else if (input.toLowerCase().includes("how are you")) {
        return "I'm an AI, but thank you for asking! How can I help you?";
      } else if (input.toLowerCase().includes("good morning") || input.toLowerCase().includes("good afternoon") || input.toLowerCase().includes("good evening")) {
        return "Good " + input.split(" ").pop() + "! How can I assist you today?";
      } else if (input.toLowerCase().includes("hey")) {
        return "Hey there! How can I assist you today?";
      } else if (input.toLowerCase().includes("greetings")) {
        return "Greetings! How may I assist you?";
      } else if (input.toLowerCase().includes("nice to meet you")) {
        return "Nice to meet you too! How can I assist you today?";
      } else if (input.toLowerCase().includes("nice to meet you")) {
        return "Nice to meet you too!"; 


        // basis health related responses
      }else if (input.toLowerCase().includes("headache")) {
        return "To relieve a headache, try taking a break, practicing relaxation techniques, or using a cold compress. If the headache persists or worsens, it's advisable to consult a healthcare professional.";
      } else if (input.toLowerCase().includes("stomachache")|| input.toLowerCase().includes("stomach pain")) {
        return "To alleviate a stomachache, consider avoiding heavy or spicy foods, drinking plenty of water, and trying over-the-counter antacids. If the stomachache persists or is accompanied by severe symptoms, consult a healthcare professional.";
      } else if (input.toLowerCase().includes("insomnia")) {
        return "To improve sleep, establish a regular sleep schedule, create a relaxing bedtime routine, and ensure your sleep environment is conducive to rest. If insomnia persists, it's recommended to seek medical advice.";


      }else if (input.toLowerCase().includes("cough")) {
            return "If you have a mild cough, staying hydrated, using a humidifier, and avoiding irritants can help. However, if the cough is persistent, accompanied by other symptoms, or affecting your daily life, it's important to consult a healthcare professional.";
          }
        
          // Sore throat
         else if (input.toLowerCase().includes("sore throat")) {
            return "For temporary relief from a sore throat, you can try gargling warm saltwater, drinking warm liquids, and using throat lozenges. If the sore throat persists for more than a few days or is severe, it's advisable to consult a healthcare professional.";
          }
        
          // Fever
        else if (input.toLowerCase().includes("fever")) {
            return "If you have a mild fever, get plenty of rest, drink fluids, and use over-the-counter fever reducers if necessary. However, if the fever is high, persistent, or accompanied by other concerning symptoms, it's important to seek medical attention.";
          }
        
          // Fatigue
        else  if (input.toLowerCase().includes("fatigue") || input.toLowerCase().includes("tiredness")) {
            return "Fatigue can be caused by various factors such as lack of sleep, stress, or underlying health conditions. Ensure you're getting enough rest, practicing stress management techniques, and maintaining a balanced diet. If fatigue persists or is accompanied by other symptoms, consult a healthcare professional.";
          }
        
          // Allergies
         else if (input.toLowerCase().includes("allergies")) {
            return "To manage allergies, try avoiding known triggers, keeping indoor air clean, and using over-the-counter antihistamines if necessary. If your allergy symptoms are severe, interfere with daily activities, or you're unsure of the triggers, it's advisable to consult an allergist or healthcare professional.";
          }
        
          // Back pain
         else if (input.toLowerCase().includes("back pain")) {
            return "For temporary relief from back pain, you can try applying heat or cold packs, practicing gentle stretches, and maintaining good posture. If the back pain is severe, persistent, or affecting your mobility, it's recommended to consult a healthcare professional.";
          }
        
          // High blood pressure
         else if (input.toLowerCase().includes("high blood pressure")) {
            return "To manage high blood pressure, it's important to maintain a healthy lifestyle, including a balanced diet, regular exercise, stress management, and medication if prescribed by a healthcare professional. It's crucial to monitor blood pressure regularly and consult your doctor for personalized advice.";
          }
        
          // Diabetes
         else if (input.toLowerCase().includes("diabetes")) {
            return "Managing diabetes involves maintaining a healthy diet, regular exercise, monitoring blood sugar levels, and taking medication as prescribed by a healthcare professional. It's important to work closely with your healthcare team to develop an individualized diabetes management plan.";
          }
        
          // Anxiety
         else if (input.toLowerCase().includes("anxiety")) {
            return "If you're experiencing anxiety, it can be helpful to practice stress management techniques, such as deep breathing exercises, mindfulness, and seeking support from loved ones or mental health professionals. If anxiety significantly impacts your daily life, consider seeking professional help.";
          }
        
          // Depression
         else if (input.toLowerCase().includes("depression")) {
            return "If you're feeling depressed, it's important to reach out to a mental health professional who can provide appropriate support and treatment options. In the meantime, engaging in self-care activities, maintaining a routine, and seeking support from loved ones can be helpful.";



         // Migraine
          } else if (input.toLowerCase().includes("migraine")) {
              return "I'm sorry to hear that you're experiencing a migraine. Migraines are often characterized by severe headaches, sensitivity to light and sound, and sometimes nausea. It's important to find a quiet and dark environment, rest, and consider over-the-counter or prescription medications for relief. If migraines are frequent or significantly impact your daily life, it's advisable to consult a healthcare professional.";
         }

         // Memory loss
   else if (input.toLowerCase().includes("memory loss")) {
    return "I'm sorry to hear that you're concerned about memory loss. Memory loss can be caused by various factors, including stress, aging, or underlying medical conditions. Engaging in mentally stimulating activities, maintaining a healthy lifestyle, and getting enough sleep can help support memory function. If you have significant concerns about memory loss, I recommend consulting a healthcare professional for a proper evaluation.";
  }

  // Stroke
  else if (input.toLowerCase().includes("stroke")) {
    return "I'm sorry to hear that you're concerned about a stroke. Strokes occur when blood flow to the brain is interrupted, leading to brain cell damage. If you or someone around you experiences sudden weakness or numbness, difficulty speaking, or severe headache, it's crucial to seek immediate medical attention by calling emergency services. Recognizing the signs and acting quickly can greatly improve outcomes.";
  }

  // Concussion
  else if (input.toLowerCase().includes("concussion")) {
    return "I'm sorry to hear that you're concerned about a concussion. Concussions are a type of brain injury that can occur due to a blow to the head or severe shaking. If you suspect a concussion, it's important to rest, avoid physical activity, and seek medical attention. A healthcare professional can evaluate your symptoms and provide guidance on recovery and any necessary precautions.";
  }

  // Alzheimer's disease
  else if (input.toLowerCase().includes("alzheimer's") || input.toLowerCase().includes("dementia")) {
    return "I'm sorry to hear that you're concerned about Alzheimer's disease or dementia. These are progressive brain disorders that primarily affect memory and cognitive function. If you or a loved one are experiencing memory loss, confusion, or other cognitive changes, it's important to consult a healthcare professional for a proper evaluation and guidance on managing the condition.";


   // Chest pain
  }else if (input.toLowerCase().includes("chest pain")) {
    return "I'm sorry to hear that you're experiencing chest pain. Chest pain can have various causes, including heart-related issues. It's important not to ignore chest pain, especially if it is severe or accompanied by shortness of breath, dizziness, or discomfort radiating to the arms. I recommend seeking immediate medical attention by calling emergency services.";
  }

  // High blood pressure
  else if (input.toLowerCase().includes("high blood pressure")) {
    return "I'm sorry to hear that you're concerned about high blood pressure. High blood pressure, or hypertension, can increase the risk of heart disease and other health problems. It's important to monitor your blood pressure regularly, maintain a healthy lifestyle with a balanced diet and regular exercise, and follow any prescribed medications or treatments recommended by your healthcare professional.";
  }

  // Heart attack
 else if (input.toLowerCase().includes("heart attack")) {
    return "I'm sorry to hear that you're concerned about a heart attack. Heart attacks occur when blood flow to the heart is blocked, leading to damage or death of heart muscle cells. If you or someone around you experiences symptoms such as chest pain or discomfort, shortness of breath, nausea, or lightheadedness, it's crucial to seek immediate medical attention by calling emergency services.";
  }

  // Arrhythmia
 else if (input.toLowerCase().includes("arrhythmia")) {
    return "I'm sorry to hear that you're concerned about an arrhythmia. Arrhythmias are abnormal heart rhythms that can cause palpitations, dizziness, or shortness of breath. If you suspect you have an arrhythmia, it's important to consult a healthcare professional for proper evaluation and management. They may recommend lifestyle changes, medications, or procedures to help regulate your heart rhythm.";
  }

  // Heart failure
 else if (input.toLowerCase().includes("heart failure")) {
    return "I'm sorry to hear that you're concerned about heart failure. Heart failure occurs when the heart cannot pump blood effectively, leading to symptoms such as shortness of breath, fatigue, and fluid retention. It's important to work with a healthcare professional to manage heart failure through medications, lifestyle modifications, and regular monitoring. They can provide guidance on managing symptoms and improving quality of life.";
  }

  // Stroke
 else if (input.toLowerCase().includes("stroke")) {
    return "I'm sorry to hear that you're concerned about a stroke. Strokes occur when blood flow to the brain is interrupted, leading to brain cell damage. If you or someone around you experiences sudden weakness or numbness, difficulty speaking, or severe headache, it's crucial to seek immediate medical attention by calling emergency services. Recognizing the signs and acting quickly can greatly improve outcomes.";
  }

  // Cholesterol
 else if (input.toLowerCase().includes("cholesterol")) {
    return "I'm sorry to hear that you're concerned about cholesterol. High cholesterol levels can contribute to heart disease. It's important to maintain a healthy diet low in saturated and trans fats, engage in regular physical activity, and follow any prescribed medications or treatments recommended by your healthcare professional. Regular cholesterol screenings can help monitor your levels."; 


  // Toothache
 } else if (input.toLowerCase().includes("toothache")) {
    return "I'm sorry to hear that you have a toothache. Toothaches can be caused by various factors, including dental decay, gum infection, or tooth sensitivity. It's important to maintain good oral hygiene, such as brushing twice a day and flossing, and schedule an appointment with a dentist to diagnose and treat the underlying cause of the toothache.";
  }

  // Gum disease
 else if (input.toLowerCase().includes("gum disease") || input.toLowerCase().includes("gingivitis")) {
    return "I'm sorry to hear that you're concerned about gum disease. Gum disease, such as gingivitis, is an inflammation of the gums caused by bacteria in dental plaque. It's important to practice good oral hygiene, including regular brushing, flossing, and dental check-ups. If you're experiencing symptoms such as bleeding gums or persistent bad breath, I recommend scheduling an appointment with a dentist.";
  }

  // Bad breath
else if (input.toLowerCase().includes("bad breath") || input.toLowerCase().includes("halitosis")) {
    return "I'm sorry to hear that you're concerned about bad breath. Bad breath can be caused by various factors, such as poor oral hygiene, certain foods, or underlying dental or medical conditions. It's important to maintain good oral hygiene practices, including brushing your teeth, tongue, and gums, flossing, and staying hydrated. If bad breath persists despite good oral hygiene, I recommend consulting a dentist or healthcare professional.";
  }

  // Oral thrush
 else if (input.toLowerCase().includes("oral thrush")) {
    return "I'm sorry to hear that you're concerned about oral thrush. Oral thrush is a fungal infection that can affect the mouth and throat. It often appears as white patches on the tongue, inner cheeks, or throat. It's important to seek medical advice from a healthcare professional who can provide appropriate antifungal medications to treat the infection.";
  }

  // Tooth sensitivity
 else if (input.toLowerCase().includes("tooth sensitivity")) {
    return "I'm sorry to hear that you're experiencing tooth sensitivity. Tooth sensitivity can be caused by various factors, such as dental decay, gum recession, or enamel erosion. It's important to use a soft-bristled toothbrush and desensitizing toothpaste designed for sensitive teeth. If tooth sensitivity persists or worsens, I recommend scheduling an appointment with a dentist for a proper evaluation and treatment.";
  }

  // Mouth ulcers
 else if (input.toLowerCase().includes("mouth ulcers") || input.toLowerCase().includes("canker sores")) {
    return "I'm sorry to hear that you're concerned about mouth ulcers or canker sores. Mouth ulcers are small, painful sores that can develop inside the mouth. They are often caused by minor injury or irritation, viral infections, or underlying health conditions. Over-the-counter medications and maintaining good oral hygiene can help relieve symptoms. If mouth ulcers are persistent or accompanied by other concerning symptoms, it's advisable to consult a dentist or healthcare professional.";
  }

  // Teeth whitening
 else if (input.toLowerCase().includes("teeth whitening")) {
    return "I'm sorry to hear that you're interested in teeth whitening. Teeth whitening can be achieved through professional dental treatments or over-the-counter products. It's important to consult a dentist for a proper evaluation and recommendation based on your oral health condition. They can discuss the available options, potential risks, and help you achieve a brighter smile safely.";
  



            
      

        






































































        
      } else {
        return "Hello! How can I assist you today?";
      }
    

    

    
}






   
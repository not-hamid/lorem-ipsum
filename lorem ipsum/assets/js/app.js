const text = [
    "In the whimsical world of bubblegum clouds, the purple giraffes dance on spaghetti bridges while singing opera to the moon. Meanwhile, in the land of cantaloupe fountains, the penguins wear top hats and perform synchronized swimming routines in peanut butter puddles. Every Tuesday, the invisible unicorns host tea parties for the giggling marshmallows, who insist on wearing polka-dot pajamas and speaking in riddles.",

    "The astronaut turtles decided to open a lemonade stand on the surface of Mars, but the Martian squirrels kept stealing their straws. The intergalactic giraffes, who were busy knitting socks out of stardust, offered their assistance by creating a protective shield made of rainbow jellybeans. Unfortunately, the jellybeans melted in the sun, and the turtles had to improvise with cucumber slices and cosmic glitter.",

    "On Tuesdays, the pancake elves gather in the enchanted forest to play hopscotch with enchanted mushrooms while juggling flaming marshmallows. The squirrels, dressed as circus acrobats, perform daring stunts on trampoline leaves, much to the delight of the giggling clouds that rain chocolate sprinkles. At midnight, the moon transforms into a disco ball, and everyone dances to the tune of invisible polka bands.",

    "The walrus detective was hot on the trail of the missing pineapple pizza, but the mischievous raccoons had already hidden it in a giant popcorn bucket. The flamingo ballerinas, who had just finished their tap-dancing lessons, offered to help by flying upside down while balancing on flaming torches. Despite their best efforts, the pizza remained elusive, much to the dismay of the hungry kangaroos in the audience.",

    "In a parallel universe where unicorns rule the dance floors, the disco balls are actually giant cheese wheels that spin to the beat of yodeling frogs. The roller-skating zebras have an annual competition to see who can do the most elaborate moonwalk while balancing on giant cotton candy clouds. The grand prize is a lifetime supply of glittery rainbows, which are highly coveted by the glittery penguins.",

    "Every Thursday, the marshmallow wizards gather to perform magic tricks with enchanted marshmallows that turn into rainbow-colored jellybeans when you clap your hands. The enchanted forest is filled with musical mushrooms that sing lullabies to the sleepwalking squirrels. At sunset, the sky turns into a giant canvas for the paintbrush-wielding fireflies to create surreal art installations.",

    "In the underwater city of Bubbleopolis, the mermaid librarians read books aloud to the seaweed and coral while wearing oversized reading glasses. The dolphins, who moonlight as opera singers, hold concerts for the curious sea turtles who wear monocles and sip on kelp smoothies. Occasionally, a rogue sea cucumber joins in, performing impromptu interpretive dances that leave everyone in stitches.",

    "The pancake party was in full swing when the waffle-shaped balloons started to deflate, causing a mild panic among the crowd of jittery jellybeans. The marshmallow acrobats attempted to rescue the situation by juggling flaming toasts while riding on tricycles made of licorice. The grand finale involved a synchronized swimming routine by the twerking pineapples, much to the delight of the enchanted crowd.",

    "In the whimsical land of Tootleberry, the gumdrop fairies ride on giant gummy bears and play croquet with giant jellybeans. The cotton candy clouds drift lazily across the sky, occasionally showering the land with sparkling sugar sprinkles. The local dragonfly orchestra performs soothing lullabies for the sleepy dandelions while the mischievous moonbeams play hide-and-seek among the twinkling stars."

]

const form = document.querySelector('.lorem-form');
const input = document.querySelector('#input');
const article = document.querySelector('.lorem-text');
const notice = document.querySelector('.notice')

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const value = parseInt(input.value);
    const random = Math.floor(Math.random() * text.length);

    if(isNaN(value) || value <= 0 || value > 9){
        article.innerHTML = `<p class="result">${text[random]}</p>`;
        notice.textContent = 'The input should be greater than "0" and less than "10"'
    }
    else{
        let tempText = text.slice(0, value)
        tempText = tempText.map((item)=>{
            return `<li class="result">${item}</li>`
        }).join("");
        article.innerHTML = `<ol>${tempText}</ol>`;
        notice.textContent = ''
    }

    
})
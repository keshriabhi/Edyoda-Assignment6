const cards = [
    {
        imgUrl: 'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2018/12/kirkjufell.jpg',
        imgAlt: 'Kirkjufell',
        header: 'Kirkjufell',
        description: 'Park up in the little seaside town of Grundarfjörður and follow the hour-and-a-half hiking trail to Kirkjufell’s summit.',
    },
    {
        imgUrl: 'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2018/12/table-mountain-1170x731.jpg',
        imgAlt: 'Table Mountain',
        header: 'Table Mountain',
        description: 'One of the world’s most famous pinnacles, Table Mountain watches over the South African city of Cape Town from 1,085 metres at its highest point.',
    },
    {
        imgUrl: 'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2019/01/mount-huangshan-1170x780.jpg',
        imgAlt: 'Mount Huangshan (Yellow Mountain)',
        header: 'Mount Huangshan',
        description: 'The mountain resembles a turreted fortress, perched ominously above the spruce and fir trees in the Canadian Rockies.',
    },
    {
        imgUrl: 'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2018/12/matterhorn-1170x780.jpg',
        imgAlt: 'Matterhorn',
        header: 'Matterhorn',
        description: 'This Alpine peak spans the border between Switzerland and Italy. At 4,478 metres it’s smaller than the famed Mont Blanc (4,810 metres).',
    },
    {
        imgUrl: 'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2019/01/mount-fuji-1170x780.jpg',
        imgAlt: 'Mount Fuji',
        header: 'Mount Fuji',
        description: 'If you’re down for the hike, choose between one of the four trails that lace the mountain. The Yoshida trail is most popular choice and buses whisk you right from Tokyo to the trailhead.',
    },
    {
        imgUrl: 'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2019/01/mount-cook-1170x778.jpg',
        imgAlt: 'Aoraki/Mount Cook',
        header: 'Aoraki/Mount Cook',
        description: 'The name Mount Cook was given to the peak by European settlers. But native peoples had always known it as Aoraki.',
    },
    {
        imgUrl: 'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2019/01/mount-everest-1170x780.jpg',
        imgAlt: 'Mount Everest',
        header: 'Mount Everest',
        description: 'The mother of all mountains, she rises to more than 8,848 metres, jutting out of the Himalayas, on the Nepal-Tibet border.',
    },
    {
        imgUrl: 'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2019/01/kilimanjaro-1170x783.jpg',
        imgAlt: 'Kilimanjaro',
        header: 'Kilimanjaro',
        description: 'Kilimanjaro is actually a volcano made up of a trio of peaks. Though if you’re planning a trip, you’ll be glad to hear it’s dormant – the last eruption happened some 360,000 years ago.',
    },
    {
        imgUrl: 'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2019/01/cradle-1170x720.jpg',
        imgAlt: 'Cradle Mountain',
        header: 'Cradle Mountain',
        description: 'It’s one of Tasmania’s most popular tourist attractions and is around an hour-and-a-half drive from the busy city of Devonport.',
    },
]

function createVideoCard(card_image,card_alt,card_header,desc)
{
  var mainDiv = document.createElement('div');
  mainDiv.classList.add('gridItem');

  var cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  var thumbnail = document.createElement('img');
  thumbnail.classList.add('cardImg');
  thumbnail.src=card_image;
  thumbnail.alt=card_alt;
  cardDiv.appendChild(thumbnail);
  
  
  var cardData = document.createElement('div');
  cardData.classList.add('cardContent');
  var title=document.createElement('h1');
  title.classList.add('cardHeader');
  title.innerText=card_header;
  var about =document.createElement('p');
  about.classList.add('cardText');
  about.innerText=desc;
  cardData.appendChild(title);
  cardData.appendChild(about);

  cardDiv.appendChild(cardData);

  mainDiv.appendChild(cardDiv);
  
  return mainDiv;
}

var mainGrid=document.getElementById('grid');


for(var i=0;i<cards.length;i++)
{
//create main card
var videoCard = createVideoCard(cards[i].imgUrl,cards[i].imgAlt,cards[i].header,cards[i].description);
mainGrid.appendChild(videoCard);
}

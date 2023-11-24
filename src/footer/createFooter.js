import logoImg from '../images/logo.png';

export function createFooter({ element, className }) {
  const footer = document.createElement(element);
  footer.setAttribute("class", className);
  const topButton = document.createElement('a');
  topButton.innerText = 'Tap to top';
  topButton.setAttribute('href', "#header");
  topButton.setAttribute('class', 'button-1');
  topButton.classList.add('top_button')
  topButton.setAttribute('id', 'topButton');
  footer.append(topButton);
  const fish = document.createElement('div');
  fish.setAttribute('class', 'footer_fish');
  fish.innerHTML = fishSvg;
  footer.append(createFooterSection());
  footer.append(fish);
  return footer;
}

const fishSvg = `<svg class="fish" id="fish">
<path
   id="fish2"
   d="m 172.04828,20.913839 c 0.0489,-0.444179 -0.2178,-0.896934 -1.01784,-1.415715 -0.72801,-0.475049 -1.4826,-0.932948 -2.2149,-1.401138 -1.6035,-1.028129 -3.29018,-1.969653 -4.89798,-3.079244 -4.67074,-3.24131 -10.22127,-4.404923 -15.76322,-5.1509392 -2.27235,-0.286401 -4.81223,-0.168925 -6.72186,-1.574351 -1.48174,-1.081294 -4.04993,-4.828523 -6.86506,-6.456038 -0.4862,-0.290688 -2.77227,-1.44486897 -2.77227,-1.44486897 0,0 1.30939,3.55000597 1.60951,4.26429497 0.69542,1.644664 -0.38158,3.063809 -0.83262,4.642447 -0.29069,1.0418502 2.13772,0.8129002 2.26463,1.7827212 0.18179,1.432007 -4.15197,1.936211 -6.59152,2.417263 -3.65634,0.715146 -7.91635,2.082841 -11.56925,0.884071 -4.3046,-1.38313 -7.37269,-4.129669 -10.46566,-7.2354952 1.43801,6.7252892 5.4382,10.6028562 5.6157,11.4226162 0.18607,0.905509 -0.45961,1.091584 -1.04099,1.682394 -1.28967,1.265655 -6.91566,7.731125 -6.93366,9.781383 1.61379,-0.247815 3.56115,-1.660957 4.9803,-2.485862 1.58035,-0.905509 7.60593,-5.373029 9.29347,-6.065023 0.38587,-0.160351 5.0549,-1.531476 5.09434,-0.932949 0.0695,0.932949 -0.30784,1.137031 -0.18436,1.527189 0.22638,0.746016 1.44144,1.465449 2.02282,1.985088 1.50918,1.292237 3.21044,2.42841 4.27373,4.156252 1.49203,2.401827 1.55805,4.999163 1.98251,7.677102 0.99469,-0.111473 2.0091,-2.17545 2.55961,-2.992638 0.51278,-0.772598 2.38639,-4.07136 3.09725,-4.275442 0.67227,-0.204082 2.75511,0.958673 3.50284,1.180763 2.85973,0.848057 5.644,1.353976 8.56032,1.353976 3.50799,0.0094 12.726,0.258104 19.55505,-4.800226 0.75545,-0.567658 2.55703,-2.731104 2.55703,-2.731104 0,0 -0.37644,-0.577091 -1.04785,-0.790605 0.89779,-0.584808 1.8659,-1.211633 1.94993,-1.925922 z"
   style="fill:#528484;fill-opacity:1"
   inkscape:connector-curvature="0"
   sodipodi:nodetypes="cccccccccccccccccccccccccccccccc" />
<path
   sodipodi:nodetypes="cccccccccccccccccccccccccccccccc"
   inkscape:connector-curvature="0"
   style="fill:#528484;fill-opacity:1"
   d="m 234.99441,42.953992 c 0.0489,-0.44418 -0.2178,-0.896934 -1.01784,-1.415715 -0.72801,-0.47505 -1.4826,-0.932949 -2.2149,-1.401138 -1.6035,-1.02813 -3.29018,-1.969653 -4.89798,-3.079245 -4.67074,-3.24131 -10.22127,-4.404923 -15.76322,-5.150939 -2.27235,-0.286401 -4.81223,-0.168925 -6.72186,-1.574351 -1.48174,-1.081294 -4.04993,-4.828523 -6.86506,-6.456038 -0.4862,-0.290688 -2.77227,-1.444869 -2.77227,-1.444869 0,0 1.30939,3.550006 1.60951,4.264295 0.69542,1.644664 -0.38158,3.063809 -0.83262,4.642447 -0.29069,1.04185 2.13772,0.8129 2.26463,1.782721 0.18179,1.432007 -4.15197,1.936211 -6.59152,2.417263 -3.65634,0.715146 -7.91635,2.082842 -11.56925,0.884072 -4.3046,-1.383131 -7.37269,-4.12967 -10.46566,-7.235496 1.43801,6.725289 5.4382,10.602857 5.6157,11.422617 0.18607,0.905508 -0.45961,1.091583 -1.04099,1.682394 -1.28967,1.265654 -6.91566,7.731125 -6.93366,9.781382 1.61379,-0.247815 3.56115,-1.660957 4.9803,-2.485862 1.58035,-0.905509 7.60593,-5.373029 9.29347,-6.065023 0.38587,-0.160351 5.0549,-1.531476 5.09434,-0.932948 0.0695,0.932948 -0.30784,1.137031 -0.18436,1.527188 0.22638,0.746016 1.44144,1.46545 2.02282,1.985088 1.50918,1.292237 3.21044,2.42841 4.27373,4.156252 1.49203,2.401827 1.55805,4.999163 1.98251,7.677102 0.99469,-0.111473 2.0091,-2.17545 2.55961,-2.992638 0.51278,-0.772598 2.38639,-4.071359 3.09725,-4.275442 0.67227,-0.204082 2.75511,0.958673 3.50284,1.180763 2.85973,0.848057 5.644,1.353976 8.56032,1.353976 3.50799,0.0094 12.726,0.258104 19.55505,-4.800226 0.75545,-0.567658 2.55703,-2.731104 2.55703,-2.731104 0,0 -0.37644,-0.57709 -1.04785,-0.790605 0.89779,-0.584808 1.8659,-1.211633 1.94993,-1.925921 z"
   id="fish3" />
<path
   id="fish6"
   d="m 200.07076,80.737109 c 0.0489,-0.44418 -0.2178,-0.896934 -1.01784,-1.415715 -0.72801,-0.47505 -1.4826,-0.932949 -2.2149,-1.401138 -1.6035,-1.02813 -3.29018,-1.969653 -4.89798,-3.079245 -4.67074,-3.24131 -10.22127,-4.404923 -15.76322,-5.150939 -2.27235,-0.286401 -4.81223,-0.168925 -6.72186,-1.574351 -1.48174,-1.081294 -4.04993,-4.828523 -6.86506,-6.456038 -0.4862,-0.290688 -2.77227,-1.444869 -2.77227,-1.444869 0,0 1.30939,3.550006 1.60951,4.264295 0.69542,1.644664 -0.38158,3.063809 -0.83262,4.642447 -0.29069,1.04185 2.13772,0.8129 2.26463,1.782721 0.18179,1.432007 -4.15197,1.936211 -6.59152,2.417263 -3.65634,0.715146 -7.91635,2.082842 -11.56925,0.884072 -4.3046,-1.383131 -7.37269,-4.12967 -10.46566,-7.235496 1.43801,6.725289 5.4382,10.602857 5.6157,11.422617 0.18607,0.905508 -0.45961,1.091583 -1.04099,1.682394 -1.28967,1.265654 -6.91566,7.731125 -6.93366,9.781382 1.61379,-0.247815 3.56115,-1.660957 4.9803,-2.485862 1.58035,-0.905509 7.60593,-5.373029 9.29347,-6.065023 0.38587,-0.160351 5.0549,-1.531476 5.09434,-0.932948 0.0695,0.932948 -0.30784,1.137031 -0.18436,1.527188 0.22638,0.746016 1.44144,1.46545 2.02282,1.985088 1.50918,1.292237 3.21044,2.42841 4.27373,4.156252 1.49203,2.401827 1.55805,4.999163 1.98251,7.677102 0.99469,-0.111473 2.0091,-2.17545 2.55961,-2.992638 0.51278,-0.772598 2.38639,-4.071359 3.09725,-4.275442 0.67227,-0.204082 2.75511,0.958673 3.50284,1.180763 2.85973,0.848057 5.644,1.353976 8.56032,1.353976 3.50799,0.0094 12.726,0.258104 19.55505,-4.800226 0.75545,-0.567658 2.55703,-2.731104 2.55703,-2.731104 0,0 -0.37644,-0.57709 -1.04785,-0.790605 0.89779,-0.584808 1.8659,-1.211633 1.94993,-1.925921 z"
   style="fill:#528484;fill-opacity:1"
   inkscape:connector-curvature="0"
   sodipodi:nodetypes="cccccccccccccccccccccccccccccccc" />
<path
   sodipodi:nodetypes="cccccccccccccccccccccccccccccccc"
   inkscape:connector-curvature="0"
   style="fill:#528484;fill-opacity:1"
   d="m 77.275623,89.018799 c 0.0489,-0.44418 -0.2178,-0.896934 -1.01784,-1.415715 -0.72801,-0.47505 -1.4826,-0.932949 -2.2149,-1.401138 -1.6035,-1.02813 -3.29018,-1.969653 -4.89798,-3.079245 -4.67074,-3.24131 -10.22127,-4.404923 -15.76322,-5.150939 -2.272347,-0.286401 -4.812227,-0.168925 -6.721857,-1.574351 -1.48174,-1.081294 -4.04993,-4.828523 -6.86506,-6.456038 -0.4862,-0.290688 -2.77227,-1.444869 -2.77227,-1.444869 0,0 1.30939,3.550006 1.60951,4.264295 0.69542,1.644664 -0.38158,3.063809 -0.83262,4.642447 -0.29069,1.04185 2.13772,0.8129 2.26463,1.782721 0.18179,1.432007 -4.15197,1.936211 -6.59152,2.417263 -3.65634,0.715146 -7.91635,2.082842 -11.56925,0.884072 -4.3046,-1.383131 -7.37269,-4.12967 -10.46566,-7.235496 1.43801,6.725289 5.4382,10.602857 5.6157,11.422617 0.18607,0.905508 -0.45961,1.091583 -1.04099,1.682394 -1.28967,1.265654 -6.9156603,7.731122 -6.9336603,9.781382 1.6137903,-0.24782 3.5611503,-1.66096 4.9803003,-2.48586 1.58035,-0.90551 7.60593,-5.37303 9.29347,-6.065025 0.38587,-0.160351 5.0549,-1.531476 5.09434,-0.932948 0.0695,0.932948 -0.30784,1.137031 -0.18436,1.527183 0.22638,0.74602 1.44144,1.46546 2.02282,1.98509 1.50918,1.29224 3.21044,2.42841 4.27373,4.15625 1.49203,2.40183 1.55805,4.999171 1.98251,7.677111 0.99469,-0.11148 2.0091,-2.17545 2.55961,-2.99264 0.51278,-0.7726 2.38639,-4.071361 3.09725,-4.275441 0.67227,-0.20408 2.75511,0.95867 3.50284,1.18076 2.85973,0.84806 5.644,1.35398 8.560317,1.35398 3.50799,0.009 12.726,0.2581 19.55505,-4.80023 0.75545,-0.56766 2.55703,-2.7311 2.55703,-2.7311 0,0 -0.37644,-0.57709 -1.04785,-0.79061 0.89779,-0.58481 1.8659,-1.211632 1.94993,-1.92592 z"
   id="fish4" />
<path
   id="fish5"
   d="m 127.65312,60.900973 c 0.0489,-0.44418 -0.2178,-0.896934 -1.01784,-1.415715 -0.72801,-0.47505 -1.4826,-0.932949 -2.2149,-1.401138 -1.6035,-1.02813 -3.29018,-1.969653 -4.89799,-3.079245 -4.67074,-3.24131 -10.22127,-4.404923 -15.76322,-5.150939 -2.27235,-0.286401 -4.812228,-0.168925 -6.721858,-1.574351 -1.48174,-1.081294 -4.04993,-4.828523 -6.86506,-6.456038 -0.4862,-0.290688 -2.77227,-1.444869 -2.77227,-1.444869 0,0 1.30939,3.550006 1.60951,4.264295 0.69542,1.644664 -0.38158,3.063809 -0.83262,4.642447 -0.29069,1.04185 2.13772,0.8129 2.26463,1.782721 0.18179,1.432007 -4.15197,1.936211 -6.59152,2.417263 -3.65634,0.715146 -7.91635,2.082842 -11.56925,0.884072 -4.3046,-1.383131 -7.37269,-4.12967 -10.46566,-7.235496 1.43801,6.725289 5.4382,10.602857 5.6157,11.422617 0.18607,0.905508 -0.45961,1.091583 -1.04099,1.682394 -1.28967,1.265654 -6.91566,7.731125 -6.93366,9.781382 1.61379,-0.247815 3.56115,-1.660957 4.9803,-2.485862 1.58035,-0.905509 7.60593,-5.373029 9.29347,-6.065023 0.38587,-0.160351 5.0549,-1.531476 5.09434,-0.932948 0.0695,0.932948 -0.30784,1.137031 -0.18436,1.527188 0.22638,0.746016 1.44144,1.46545 2.02282,1.985088 1.50918,1.292237 3.21044,2.42841 4.27373,4.156252 1.49203,2.401827 1.55805,4.999163 1.98251,7.677102 0.99469,-0.111473 2.0091,-2.17545 2.55961,-2.992638 0.51278,-0.772598 2.38639,-4.071359 3.09725,-4.275442 0.67227,-0.204082 2.75511,0.958673 3.50284,1.180763 2.85973,0.848057 5.643998,1.353976 8.560318,1.353976 3.50799,0.0094 12.726,0.258104 19.55506,-4.800226 0.75545,-0.567658 2.55703,-2.731104 2.55703,-2.731104 0,0 -0.37644,-0.57709 -1.04785,-0.790605 0.89779,-0.584808 1.8659,-1.211633 1.94993,-1.925921 z"
   style="fill:#528484;fill-opacity:1"
   inkscape:connector-curvature="0"
   sodipodi:nodetypes="cccccccccccccccccccccccccccccccc" />
<path
    d="m 68.19699,20.522295 c 0.0489,-0.44418 -0.2178,-0.896934 -1.01784,-1.415715 -0.72801,-0.47505 -1.4826,-0.932949 -2.2149,-1.401138 -1.6035,-1.02813 -3.29018,-1.969653 -4.89798,-3.079245 C 55.39553,11.384887 49.845,10.221274 44.30305,9.4752582 42.0307,9.1888572 39.49082,9.3063332 37.58119,7.900907 36.09945,6.819613 33.53126,3.072384 30.71613,1.444869 30.22993,1.154181 27.94386,0 27.94386,0 c 0,0 1.30939,3.550006 1.60951,4.264295 0.69542,1.644664 -0.38158,3.063809 -0.83262,4.642447 -0.29069,1.0418502 2.13772,0.8129002 2.26463,1.782721 0.18179,1.432007 -4.15197,1.936211 -6.59152,2.417263 -3.65634,0.715146 -7.91635,2.082842 -11.56925,0.884072 C 8.52001,12.607667 5.45192,9.8611282 2.35895,6.755302 3.79696,13.480591 7.79715,17.358159 7.97465,18.177919 8.16072,19.083427 7.51504,19.269502 6.93366,19.860313 5.64399,21.125967 0.018,27.591438 0,29.641695 1.61379,29.39388 3.56115,27.980738 4.9803,27.155833 c 1.58035,-0.905509 7.60593,-5.373029 9.29347,-6.065023 0.38587,-0.160351 5.0549,-1.531476 5.09434,-0.932948 0.0695,0.932948 -0.30784,1.137031 -0.18436,1.527188 0.22638,0.746016 1.44144,1.46545 2.02282,1.985088 1.50918,1.292237 3.21044,2.42841 4.27373,4.156252 1.49203,2.401827 1.55805,4.999163 1.98251,7.677102 0.99469,-0.111473 2.0091,-2.17545 2.55961,-2.992638 0.51278,-0.772598 2.38639,-4.071359 3.09725,-4.275442 0.67227,-0.204082 2.75511,0.958673 3.50284,1.180763 2.85973,0.848057 5.644,1.353976 8.56032,1.353976 3.50799,0.0094 12.726,0.258104 19.55505,-4.800226 0.75545,-0.567658 2.55703,-2.731104 2.55703,-2.731104 0,0 -0.37644,-0.57709 -1.04785,-0.790605 0.89779,-0.584808 1.8659,-1.211633 1.94993,-1.925921 z"
   id="fish1" />
</svg>`

function createElement(e, className, id) {
  const element = document.createElement(e);

  if (className) {
    element.setAttribute('class', className);
  }

  if (id) {
    element.setAttribute('id', id);
  }

  return element;
}

function createImageElement (src) {
  const image = document.createElement('img');
  image.setAttribute('src', src);

  return image;
}

function createLinkElement(href, textContent, className, id) {
  const link = createElementWithTextContent('a', textContent, className, id);
  link.setAttribute('href', href);

  return link;
}

function createElementWithTextContent(e, textContent, classNmae, id,) {
  const element = createElement(e, classNmae, id);
  element.innerHTML = textContent;

  return element;
}

function createFooterColumn(e, content) {
  const column = createElement(e, 'footer_column');
  const { title, textContent } = content;
  const footerColumnTitle = createElementWithTextContent('h4', title, 'footer_column_title');
  const footerColumnList = createElement('ul', 'footer_column_list');

  for (let li in textContent) {
    const { itemTitle, itemHref } = textContent[li];
    const footerColumnListItem = createElement('li', 'footer_column_list_item');
    const footerColumnListItemLink = createLinkElement(itemHref, itemTitle);
    footerColumnListItemLink.addEventListener("click", clickHandler);
    footerColumnListItem.append(footerColumnListItemLink);
    footerColumnList.append(footerColumnListItem);
  }

  column.append(footerColumnTitle);
  column.append(footerColumnList);

  return column;
}

function creteFooterLogoColumn(src) {
  const currentDomain = window.location.href;
  const logoColumn = createElement('div', 'footer_column');
  const logo = createElement('div', 'logo') 
  const link = createElement('a');
  link.setAttribute('href', currentDomain);
  const logoPng = createImageElement(src);
  link.append(logoPng);
  logo.append(link);
  logoColumn.append(logo);

  return logoColumn;
}

function createContactsColumn(title, contacts) {
  const { tel, email, address } = contacts;
  const contactsColumn = createElement('div', 'footer_column');
  const footerColumnTitle = createElementWithTextContent('h4', title, 'footer_column_title');
  const companyContactsList = createElement('ul', 'footer_column_list');
  const companyTelItem = createElement('li', 'footer_column_list_item');
  const companyEmailItem = createElement('li', 'footer_column_list_item');
  const telHref = tel.replaceAll('(', '').replaceAll(')', '').replaceAll('-', '').replaceAll(' ', '');
  const companyTel = createLinkElement(`tel:${telHref }`, `<i class="fa-solid fa-phone"></i> ${tel}`);
  const companyEmail = createLinkElement(`mailto:${email}`, `<i class="fa-solid fa-envelope"></i> ${email}`);
  const companyAddress = createElementWithTextContent('li', `<i class="fa-solid fa-location-dot"></i> ${address}`, 'footer_column_list_item');

  companyTelItem.append(companyTel);
  companyEmailItem.append(companyEmail);
  companyContactsList.append(companyEmailItem);
  companyContactsList.append(companyTelItem);
  companyContactsList.append(companyAddress);

  contactsColumn.append(footerColumnTitle);
  contactsColumn.append(companyContactsList);

  return contactsColumn;
}

function getContactInfo() {
  const contacts = {
    'tel': '+(555) 123-4567',
    'email': 'aquascape@gmail.com',
    'address': 'Elm Street Anytown, USA',
  };

  return contacts;
}

function getFooterColumnsData() {
  const data = [
    {
      'title': 'Menu',
      'textContent': [
        {
          'itemTitle': 'Home',
          'itemHref': '#header',
        },

        {
          'itemTitle': 'Products',
          'itemHref': '#products',
        },

        {
          'itemTitle': 'Game',
          'itemHref': '#game',
        },

        {
          'itemTitle': 'Contacts',
          'itemHref': '#contacts',
        },

        {
          'itemTitle': 'About',
          'itemHref': '#aboutUs',
        },
      ] 
    },

    {
      'title': 'Products',
      'textContent': [
        {
          'itemTitle': 'Guppy',
          'itemHref': '#products',
        },

        {
          'itemTitle': 'Gourami',
          'itemHref': '#products',
        },

        {
          'itemTitle': 'Angelfish',
          'itemHref': '#products',
        },

        {
          'itemTitle': 'Molly',
          'itemHref': '#products',
        },

        {
          'itemTitle': 'Cichlids',
          'itemHref': '#products',
        },
      ] 
    },
  ];

  return data;
}

function createFooterSection() {
  const footerContainer = createElement('div', 'container');
  const row = createElement('div', 'footer_row');
  const logo = creteFooterLogoColumn(logoImg);
  const contacts = createContactsColumn('Contacts', getContactInfo());
  const data = getFooterColumnsData();
  row.append(logo);

  for (let dt in data) {
    row.append(createFooterColumn('div', data[dt]));
  }
  
  row.append(contacts);
  footerContainer.append(row);

  return footerContainer;
}

export function tapToTop() {
  const topButton = document.getElementById("topButton");
    
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topButton.style.display = "block";
  } else {
        topButton.style.display = "none";
  }
  
}

export function smoothScroll() {
  const topButton = document.getElementById("topButton");
  const menuItems = document.querySelectorAll('nav ul li a');
  const heroButton = document.querySelector('.hero a');

  for (let link = 0; link < menuItems.length; ++link) {
    menuItems[link].addEventListener("click", clickHandler);
  }

  topButton.addEventListener("click", clickHandler);
  heroButton.addEventListener("click", clickHandler);
}

export default function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}
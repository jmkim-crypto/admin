const lucide = require('lucide-react');
console.log('Linkedin:', lucide.Linkedin);
console.log('Youtube:', lucide.Youtube);
console.log('LinkedIn:', lucide.LinkedIn);
console.log('YouTube:', lucide.YouTube);
console.log('Keys:', Object.keys(lucide).filter(k => k.toLowerCase().includes('link') || k.toLowerCase().includes('you')));

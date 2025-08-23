// Search data for the Gong Lab website
const searchData = [
    // Homepage content
    {
        id: 'home-hero',
        title: 'Cell Polarity and Dynamics Lab',
        content: 'Cell Polarity and Dynamics Lab. Gong Lab research team focused on human development through stem cell biology and organoid engineering.',
        keywords: ['cell polarity', 'dynamics', 'gong lab', 'stem cell', 'organoid', 'human development'],
        page: 'Home',
        url: 'index.html',
        section: 'Hero'
    },
    {
        id: 'home-research',
        title: 'Our Research',
        content: 'We study how cell polarity controls dynamic processes that drive tissue development, homeostasis and regeneration. We dive deep into fundamental principles of polarity that integrate signaling pathways and organelle positioning. By harnessing this knowledge, we aim to engineer cells to guide development and combat diseases. Currently, we combine micropatterned cell system with organoid and mouse models to investigate a novel form of structural polarity, which we term ER-PM contacts-dependent polarity. Using quantitative imaging, synthetic biology, omics-based screening, and genetic perturbation tools, we are uncovering both the molecular basis and physiological roles of this newly recognized polarity program.',
        keywords: ['research', 'cell polarity', 'tissue development', 'homeostasis', 'regeneration', 'signaling pathways', 'organelle positioning', 'micropatterned cell system', 'organoid', 'mouse models', 'ER-PM contacts', 'quantitative imaging', 'synthetic biology', 'omics screening', 'genetic perturbation'],
        page: 'Home',
        url: 'index.html#research-intro',
        section: 'Research'
    },
    
    // Publications content
    {
        id: 'publications-main',
        title: 'Publications',
        content: 'Research papers and publications from our lab. Recent publications, featured research papers, and scientific contributions from the Gong Lab.',
        keywords: ['publications', 'research papers', 'scientific papers', 'articles', 'research'],
        page: 'Publications',
        url: 'publications.html',
        section: 'Main'
    },
    
    // People content
    {
        id: 'people-pi',
        title: 'Bo Gong, Ph.D.',
        content: 'Bo Gong, Ph.D. Assistant Professor, Department of Cell and Tissue Biology, University of California San Francisco. Principal Investigator of the Gong Lab.',
        keywords: ['bo gong', 'principal investigator', 'assistant professor', 'ucsf', 'cell tissue biology', 'pi', 'faculty'],
        page: 'People',
        url: 'people.html',
        section: 'Team Lead'
    },
    {
        id: 'people-recruitment',
        title: 'Join Our Team',
        content: 'Lab Members recruitment. Come work with us! Click here to apply. We are looking for talented postdocs, graduate students, and research technologists to join our team.',
        keywords: ['recruitment', 'join team', 'postdoc', 'graduate student', 'research technologist', 'apply', 'job', 'position'],
        page: 'People',
        url: 'people.html',
        section: 'Recruitment'
    },
    
    // News content
    {
        id: 'news-main',
        title: 'News from the Gong Lab',
        content: 'Latest updates and announcements from our lab. Lab updates, publications, awards, and events.',
        keywords: ['news', 'updates', 'announcements', 'lab updates', 'events'],
        page: 'News',
        url: 'news.html',
        section: 'Main'
    },
    {
        id: 'news-lab-open',
        title: 'The Gong Lab is open!',
        content: 'We are excited to announce that Gong lab is officially open at the University of California San Francisco, Department of Cell and Tissue Biology!! We are looking forward to having new graduate students, postdocs, research technologist...',
        keywords: ['lab open', 'gong lab open', 'ucsf', 'new lab', 'graduate students', 'postdocs', 'research technologist'],
        page: 'News',
        url: 'news.html',
        section: 'Lab Update',
        date: 'October 1, 2025'
    },
    
    // Contact content
    {
        id: 'contact-main',
        title: 'Contact Information',
        content: 'Bo Gong, Ph.D. Assistant Professor, Department of Cell and Tissue Biology, University of California San Francisco, 513 Parnassus Ave, HSW 612, San Francisco, CA 94143. Email: bog4001@med.cornell.edu',
        keywords: ['contact', 'email', 'address', 'location', 'bo gong', 'ucsf', 'parnassus', 'san francisco'],
        page: 'Contact',
        url: 'contact.html',
        section: 'Contact Details'
    },
    
    // Research topics and methods
    {
        id: 'research-topics',
        title: 'Research Topics',
        content: 'Cell polarity, tissue development, organoid engineering, stem cell biology, developmental biology, regenerative medicine, ER-PM contacts, cellular dynamics, morphogenesis, patterning mechanisms',
        keywords: ['cell polarity', 'tissue development', 'organoid engineering', 'stem cell biology', 'developmental biology', 'regenerative medicine', 'ER-PM contacts', 'cellular dynamics', 'morphogenesis', 'patterning'],
        page: 'Research',
        url: 'index.html#research-intro',
        section: 'Topics'
    },
    {
        id: 'research-methods',
        title: 'Research Methods',
        content: 'Quantitative imaging, synthetic biology, omics-based screening, genetic perturbation, micropatterned cell systems, organoid culture, mouse models, live cell imaging, functional genomics',
        keywords: ['quantitative imaging', 'synthetic biology', 'omics screening', 'genetic perturbation', 'micropatterned cells', 'organoid culture', 'mouse models', 'live imaging', 'functional genomics'],
        page: 'Research',
        url: 'index.html#research-intro',
        section: 'Methods'
    }
];

// Export for use in search functionality
if (typeof module !== 'undefined' && module.exports) {
    module.exports = searchData;
} 
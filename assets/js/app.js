if (document.querySelector('#codeMapGetters')) {
document.querySelector('#codeMapGetters').value = 
`import { mapGetters } from 'vuex'

computed: {
    ...mapGetters({
        exampleData: 'example/exampleData',
        exampleDataSecond: 'example/exampleDataSecond',
    })
}`
}

if (document.querySelector('#codeMapAction')) {
document.querySelector('#codeMapAction').value = 
`this.$store.dispatch('example/exampleActionFunction', data)`
}

if (document.querySelector('#codeStoreMutation')) {
document.querySelector('#codeStoreMutation').value = 
`mutations: {
    SET_EXAMPLE_DATA: (state, data) => state.exampleData = data,
},`
}

if (document.querySelector('#codeComponentImports')) {
document.querySelector('#codeComponentImports').value = 
`components: {
    HeaderDeleted: () => import('~/components/common/the-header/HeaderDeleted.vue'),
    
    ContractsIcon: () => import('~/components/common/icons/ContractsIcon.vue'),
    DeletedFilesIcon: () => import('~/components/common/icons/DeletedFilesIcon.vue'),
    FolderIcon: () => import('~/components/common/icons/FolderIcon.vue'),
    ClipIcon: () => import('~/components/common/icons/ClipIcon.vue'),

    SkeletonProjectsFolder: () => import('~/components/common/skeletons/SkeletonProjectsFolder.vue'),
},`
}

if (document.querySelector('#codeLanguageImport')) {
document.querySelector('#codeLanguageImport').value = 
`export default {
    contractSelectHeaderCategory: 'Category',
},`
}

if (document.querySelector('#codeEndPointTemplate')) {
    document.querySelector('#codeEndPointTemplate').value = 
    "const res = await this.$axios({\n" +
    "    method: 'GET',\n" +
    "    url: `/api/v2/example/`,\n" +
    "    headers: { Authorization: `Bearer ${this.$cookies.get('token')}` },\n" +
    "})\n" +
    "commit('SET_DATA', res.data)"
}

if (document.querySelector('#codePropsTemplate')) {
document.querySelector('#codePropsTemplate').value = 
`props: {
    value: VueTypes.oneOfType([String, Object, Number]).def(''),
    pagination: VueTypes.object.def(null),
    pagination: VueTypes.object,
    text: VueTypes.string.required,
    isCleared: VueTypes.bool.def(false),
},`
}

if (document.querySelector('#codeIconsTemplate')) {
document.querySelector('#codeIconsTemplate').value = 
`<template>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 10" class="i-background i-background--stroke i-background--fill" stroke-width="2" />
        <path d="dz" fill="#1D2939" stroke="#1D2939" stroke-width="2"/>
    </svg>
</template>

<script>
    export default {
        name: 'ExampleIcon',
    }
</script>`
}
const tels = document.querySelectorAll("input[type=\"tel\"]");

if (tels) {
    tels.forEach(el => {
        IMask(el, { mask: "+ {0} (000) 000 00 000 00" });
    });
}
const observer = lozad('.lozad', {
    loaded: function(img) {
        img.addEventListener('load', function() {
            img.classList.add('loaded');
        });
        
        if(img.hasAttribute('data-background-image')) {
            img.classList.add('loaded');
        };
    },
});


observer.observe();
const smoothLinks = document.querySelectorAll('a[href^="#"]');
if (smoothLinks) {
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');
    
            if (id === "#") return
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };
}
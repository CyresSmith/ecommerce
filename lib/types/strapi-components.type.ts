import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutFooter extends Struct.ComponentSchema {
    collectionName: 'components_layout_footers';
    info: {
        displayName: 'Footer';
        icon: 'layout';
    };
    attributes: {
        logo: Schema.Attribute.Component<'shared.link', false>;
        socials: Schema.Attribute.Component<'shared.link', true>;
    };
}

export interface LayoutHeader extends Struct.ComponentSchema {
    collectionName: 'components_layout_headers';
    info: {
        displayName: 'Header';
    };
    attributes: {
        authBtn: Schema.Attribute.Component<'shared.link', false>;
        logo: Schema.Attribute.Component<'shared.link', false>;
    };
}

export interface LayoutHero extends Struct.ComponentSchema {
    collectionName: 'components_layout_heroes';
    info: {
        displayName: 'Hero';
        icon: 'television';
    };
    attributes: {
        heading: Schema.Attribute.String & Schema.Attribute.Required;
        image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
        link: Schema.Attribute.Component<'shared.link', false>;
        subHeading: Schema.Attribute.String;
    };
}

export interface SharedAddress extends Struct.ComponentSchema {
    collectionName: 'components_shared_addresses';
    info: {
        displayName: 'Address';
    };
    attributes: {};
}

export interface SharedLink extends Struct.ComponentSchema {
    collectionName: 'components_shared_links';
    info: {
        displayName: 'Link';
        icon: 'link';
    };
    attributes: {
        title: Schema.Attribute.String & Schema.Attribute.Required;
        url: Schema.Attribute.String & Schema.Attribute.Required;
    };
}

export interface SharedSeo extends Struct.ComponentSchema {
    collectionName: 'components_shared_seos';
    info: {
        displayName: 'Seo';
        icon: 'information';
    };
    attributes: {
        description: Schema.Attribute.Text &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMaxLength<{
                maxLength: 1000;
                minLength: 10;
            }>;
        title: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMaxLength<{
                maxLength: 100;
                minLength: 3;
            }>;
    };
}

declare module '@strapi/strapi' {
    export module Public {
        export interface ComponentSchemas {
            'layout.footer': LayoutFooter;
            'layout.header': LayoutHeader;
            'layout.hero': LayoutHero;
            'shared.address': SharedAddress;
            'shared.link': SharedLink;
            'shared.seo': SharedSeo;
        }
    }
}

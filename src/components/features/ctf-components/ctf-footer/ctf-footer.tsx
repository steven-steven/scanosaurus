import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Twitter from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { Theme, Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'next-i18next';

import contentfulConfig from 'contentful.config';

import { FooterFieldsFragment } from './__generated/ctf-footer.generated';

import {
  getLinkDisplayText,
  getLinkHrefPrefix,
} from '@src/components/features/ctf-components/ctf-navigation/utils';
import { LanguageSelector } from '@src/components/features/language-selector';
import { Link } from '@src/components/shared/link';
import { useContentfulContext } from '@src/contentful-context';
import Logo from '@src/icons/logo-tagline.svg';
import { CONTAINER_WIDTH } from '@src/theme';

const useStyles = makeStyles((theme: Theme) => ({
  footerContainer: {
    backgroundColor: '#F4F4F4',
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
  },
  footer: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexWrap: 'wrap',
    maxWidth: `${CONTAINER_WIDTH / 10}rem`,
    paddingBottom: theme.spacing(5),
    paddingTop: theme.spacing(5),
    gap: '30px',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing(10),
      paddingTop: theme.spacing(10),
    },
  },
  menuWrapper: {
    alignItems: 'flex-start',
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: theme.spacing(-8),
  },
  menuColumn: {
    paddingLeft: theme.spacing(8),
  },
  menu: {
    listStyle: 'none',
    margin: theme.spacing(0, 0, 8),
    padding: 0,
    width: '17.2rem',
    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
    },
  },
  menuItem: {
    fontSize: '1.8rem',
    fontWeight: 400,
    lineHeight: 1.2,
    color: '#1B273A',
    margin: theme.spacing(0, 0, 4),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(8),
    },
  },
  submenu: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    '& $menuItem': {
      fontWeight: 400,
    },
  },
  submenuItem: {
    '& a': {
      borderBottom: '1px solid transparent',
      color: '#414D63',
      display: 'inline-block',
      minWidth: 0,
      transition: 'border-bottom-color 0.2s ease-in-out',
    },

    '&:hover, &:focus, &:focus-within': {
      '& > a': {
        borderBottomColor: '#7C7C7C',
      },
    },
  },
  footerCorporateContainer: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    paddingBottom: theme.spacing(14),
    paddingTop: theme.spacing(8),
  },
  footerCorporate: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: `${CONTAINER_WIDTH / 10}rem`,
  },
  storeLogos: {
    marginTop: theme.spacing(7),
  },
  storeLogo: {
    display: 'block',
    maxWidth: '11.5rem',
    '& + &': {
      marginTop: theme.spacing(5),
    },
    '& img': {
      display: 'block',
      maxWidth: '100%',
    },
  },
  corporateLogoMenu: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
    },
  },
  corporateLogoContainer: {
    flexShrink: 0,
    marginBottom: theme.spacing(3),
    marginTop: '0.2rem',
    [theme.breakpoints.up('md')]: {
      flexShrink: 0,
    },
  },
  corporateLogo: {
    display: 'block',
    height: 'auto',
    maxWidth: '100%',
  },
  corporateName: {
    color: 'white',
    fontSize: '2.5rem',
    fontFamily: 'Courier',
    marginTop: theme.spacing(1),
    marginBottom: 0,
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem',
    },
  },
  copyrightAndLegal: {
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
      display: 'flex',
    },
  },
  copyright: {
    fontSize: '1.3rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.8rem',
    },
    lineHeight: 1.2,
    margin: theme.spacing(4, 10, 10, 0),
  },
  legalMenuWrapper: {},
  legalMenu: {
    listStyle: 'none',
    margin: theme.spacing(5, 0, 0),
    padding: 0,
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: 0,
    },
  },
  legalMenuItem: {
    fontSize: '2rem',
    marginTop: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginTop: 0,
      width: 'auto',
    },
    '&:not(:last-child)': {
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(8),
      },
    },
    '& a': {
      borderBottom: '1px solid transparent',
      color: '#fff',
      display: 'inline-block',
      transition: 'border-bottom-color 0.2s ease-in-out',
    },

    '&:hover, &:focus, &:focus-within': {
      '& > a': {
        borderBottomColor: '#000',
      },
    },
  },
  emailContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',

    '& div': {
      display: 'flex',
      gap: '10px',
    },
    '& button': {
      fontSize: '1.5rem',
      [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
      },
    },
  },
  contactUs: {
    textAlign: 'center',
    marginTop: '5rem',
    fontFamily: 'courier',
  },
  contactContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: '10px',
    width: `${CONTAINER_WIDTH / 25}rem`,

    [theme.breakpoints.up('md')]: {
      gap: '30px',
    },

    '& a': {
      textDecoration: 'none',
      '&:hover': {
        border: '0.5px solid black',
      },
    },
    '& > div,a': {
      display: 'flex',
      gap: '10px',
      flexGrow: '1',

      [theme.breakpoints.up('md')]: {
        gap: '30px',
      },

      '& > a': {
        width: '50%',
      },
    },
  },
  contactCard: {
    width: '100%',
    '& div': {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      height: '100%',
      justifyContent: 'space-around',
      padding: '16px 0',

      '& svg': {
        margin: '0 auto',
        fontSize: '4rem',
      },
    },
  },
  socialDisclaimer: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      marginTop: theme.spacing(7),
      justifyContent: 'space-between',
      marginRight: theme.spacing(10),
    },
  },
  socialWrapper: {
    [theme.breakpoints.up('md')]: {
      flexShrink: 0,
      order: -1,
      marginRight: theme.spacing(8),
      width: '38.4rem',
    },
  },
  socialTitle: {
    fontSize: '1.3rem',
    fontWeight: 400,
    lineHeight: 1.2,
    [theme.breakpoints.up('md')]: {
      fontSize: '1.8rem',
    },
  },
  social: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
    '& a': {
      color: 'inherit',
      display: 'inline-block',
      lineHeight: 1.2,

      '&:not(:first-child)': {
        marginLeft: theme.spacing(6),
      },
    },
    '& .MuiSvgIcon-root': {
      fontSize: '3.2rem',
    },
  },
}));

export const CtfFooter = (props: FooterFieldsFragment) => {
  const footerContent = props.items[0];

  const { t } = useTranslation();
  const { locale } = useContentfulContext();
  const inspectorMode = useContentfulInspectorMode();

  const renderMenuGroupLinks = (menuGroup, listClassName) => {
    return menuGroup?.items?.map(menuItem => {
      const href = getLinkHrefPrefix(menuItem);
      const linkText = getLinkDisplayText(menuItem);
      return (
        <li
          key={menuItem.sys.id}
          className={listClassName}
          {...inspectorMode({
            entryId: menuItem.sys.id,
            fieldId: 'pageName',
          })}
        >
          <Link href={href} className={classes.menuItem}>
            {linkText}
          </Link>
        </li>
      );
    });
  };

  const classes = useStyles();
  const containerProps = footerContent?.sys?.id
    ? inspectorMode({
        entryId: footerContent.sys.id,
        fieldId: 'menuItems',
        locale,
      })
    : undefined;

  const sendEmail = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        contentfulConfig.emailjs.service_id,
        contentfulConfig.emailjs.template_id,
        e.target,
        contentfulConfig.emailjs.public_key,
      )
      .then(
        result => {
          alert("Email Sent! We'll get back to you, thank you");
        },
        error => {
          console.log(error.text);
        },
      );
  };

  return (
    <>
      <Container {...containerProps} maxWidth={false} className={classes.footerContainer}>
        <Typography variant="h2" className={classes.contactUs}>
          Reach out and see how you too, can start scanning like a dino!
        </Typography>
        <footer id="contacts" className={classes.footer}>
          <div className={classes.contactContainer}>
            {footerContent?.location && (
              <a
                href={`http://www.google.com/maps/place/${footerContent.location.lat},${footerContent.location.lon}`}
                title={t('contact.mapLink')}
                target="_blank"
                rel="nofollow noreferrer"
              >
                <Card className={classes.contactCard}>
                  <CardContent>
                    <PlaceIcon color="info" />
                    <Typography variant="subtitle1">Our Address</Typography>
                    <Typography variant="subtitle2">
                      690 King St W, N2G 0B9, Kitchener, ON, Canada
                    </Typography>
                  </CardContent>
                </Card>
              </a>
            )}
            <div>
              <a
                href="tel:+1226-989-0116"
                title={t('contact.phoneLink')}
                target="_blank"
                rel="nofollow noreferrer"
              >
                <Card className={classes.contactCard}>
                  <CardContent>
                    <CallIcon color="info" />
                    <Typography variant="subtitle1">Call us</Typography>
                    <Typography variant="subtitle2">(+1) 226 989 0116</Typography>
                  </CardContent>
                </Card>
              </a>
              <a
                href="mailto:steven.infinity29@gmail.com"
                title={t('contact.emailLink')}
                target="_blank"
                rel="nofollow noreferrer"
              >
                <Card className={classes.contactCard}>
                  <CardContent>
                    <EmailIcon color="info" />
                    <Typography variant="subtitle1">Our Email</Typography>
                    <Typography variant="subtitle2">steven.infinity29@gmail.com</Typography>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
          <form onSubmit={sendEmail}>
            <div className={classes.emailContainer}>
              <div>
                <TextField required name="name" label="Your Name" variant="outlined" />
                <TextField required name="email" label="Your Email" variant="outlined" />
              </div>
              <TextField name="subject" label="Subject" variant="outlined" />
              <TextField
                required
                multiline
                name="message"
                label="Message"
                rows={5}
                variant="outlined"
              />
              <Button type="submit" color="primary" variant="contained">
                Send Message
              </Button>
            </div>
          </form>
          {/* {footerContent?.menuItemsCollection?.items?.length && (
            <nav role="navigation" className={classes.menuWrapper}>
              {footerContent.menuItemsCollection.items.map(
                menuItem =>
                  menuItem && (
                    <div key={menuItem.sys.id} className={classes.menuColumn}>
                      <ul className={classes.menu}>
                        <li>
                          <p
                            className={classes.menuItem}
                            {...inspectorMode({
                              entryId: menuItem.sys.id,
                              fieldId: 'groupName',
                              locale,
                            })}
                          >
                            {menuItem.groupName}
                          </p>
                          {menuItem.featuredPagesCollection && (
                            <ul className={classes.submenu}>
                              {renderMenuGroupLinks(
                                menuItem.featuredPagesCollection,
                                classes.submenuItem,
                              )}
                            </ul>
                          )}
                        </li>
                      </ul>
                    </div>
                  ),
              )}
            </nav>
          )} */}
        </footer>
      </Container>
      <Container maxWidth={false} className={classes.footerCorporateContainer}>
        <section className={classes.footerCorporate}>
          <div className={classes.corporateLogoMenu}>
            <div className={classes.corporateLogoContainer}>
              <Logo className={classes.corporateLogo} />
            </div>
            <p className={classes.corporateName}>Scanosaurus</p>

            <section className={classes.copyrightAndLegal}>
              <p className={classes.copyright}>
                {t('legal.copyright', { year: new Date().getFullYear() })}
              </p>
              {footerContent?.legalLinks?.featuredPagesCollection?.items?.length && (
                <nav role="navigation" className={classes.legalMenuWrapper}>
                  <ul className={classes.legalMenu}>
                    {renderMenuGroupLinks(
                      footerContent.legalLinks.featuredPagesCollection,
                      classes.legalMenuItem,
                    )}
                  </ul>
                </nav>
              )}
            </section>
          </div>

          <div className={classes.socialDisclaimer}>
            <div className={classes.socialWrapper}>
              <Typography className={classes.socialTitle}>{t('socials.findUsOn')}</Typography>
              <div className={classes.social}>
                {footerContent?.twitterLink && (
                  <a
                    href={footerContent.twitterLink}
                    title={t('socials.twitter')}
                    target="_blank"
                    rel="nofollow noreferrer"
                  >
                    <Twitter />
                  </a>
                )}
                {footerContent?.facebookLink && (
                  <a
                    href={footerContent.facebookLink}
                    title={t('socials.facebook')}
                    target="_blank"
                    rel="nofollow noreferrer"
                  >
                    <Facebook />
                  </a>
                )}
                {footerContent?.linkedinLink && (
                  <a
                    href={footerContent.linkedinLink}
                    title={t('socials.linkedin')}
                    target="_blank"
                    rel="nofollow noreferrer"
                  >
                    <LinkedIn />
                  </a>
                )}
                {footerContent?.instagramLink && (
                  <a
                    href={footerContent.instagramLink}
                    title={t('socials.instagram')}
                    target="_blank"
                    rel="nofollow noreferrer"
                  >
                    <Instagram />
                  </a>
                )}
              </div>
            </div>
            <div className="">
              <LanguageSelector />
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

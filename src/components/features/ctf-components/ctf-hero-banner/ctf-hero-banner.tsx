import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { Container, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { useMemo } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import colorfulTheme from '@src/theme';

import { HeroBannerFieldsFragment } from './__generated/ctf-hero-banner.generated';

import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext';
import { PageLink } from '@src/components/features/page-link';
import LayoutContext, { defaultLayout, useLayoutContext } from '@src/layout-context';
import { getColorConfigFromPalette, HEADER_HEIGHT_MD, HEADER_HEIGHT } from '@src/theme';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
  },

  fullScreen: {
    minHeight: `calc(100vh - ${HEADER_HEIGHT_MD})`,
    [theme.breakpoints.up('md')]: {
      minHeight: `calc(100vh - ${HEADER_HEIGHT})`,
    },
    '@media (min-height: 91.2em)': {
      minHeight: '91.2rem',
    },
  },

  innerContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '125.8rem',
    textAlign: 'center',
    padding: theme.spacing(5, 0, 50),
    position: 'relative',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      padding: theme.spacing(33, 0, 33),
    },
    '@media (min-height: 91.2em)': {
      padding: theme.spacing(39, 0, 39),
    },
  },

  partialBgContainer: {
    display: 'none',
    height: '100%',
    left: '50%',
    maxWidth: '192rem',
    position: 'absolute',
    top: 0,
    transform: 'translateX(-50%)',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },

  partialBg: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    width: '50%',
  },

  headline: {
    fontSize: '1.5rem',
    fontWeight: 800,
    lineHeight: 1.08,
    maxWidth: '44rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '3.8rem',
    },
  },
  greetings: {
    lineHeight: 1.5,
    fontSize: '3rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '5rem',
    },
  },

  body: {
    fontWeight: 400,
    lineHeight: 1.56,
    marginTop: theme.spacing(2),
    maxWidth: '46.9rem',
    '& p': {
      color: '#bcbcbc',
      fontSize: '1.5rem',
      [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '2.5rem',
      },
    },
  },
  ctaContainer: {
    marginTop: theme.spacing(6),
  },
  contact: {
    border: '1px solid #b56005',
    textDecoration: 'none',
    padding: '8px 40px',
    margin: '0 auto',
    borderRadius: '5px',
    color: '#b56005',
    fontWeight: '500',

    '&:hover': {
      backgroundColor: '#b56005',
      color: 'white',
    },
  },
}));

export const CtfHeroBanner = (props: HeroBannerFieldsFragment) => {
  const {
    image,
    mobileImage,
    imageStyle: imageStyleBoolean,
    headline,
    greetings,
    bodyText,
    ctaText,
    targetPage,
    colorPalette,
    sys: { id },
    heroSize: heroSizeBoolean,
  } = props;
  const layout = useLayoutContext();
  const medScreen = useMediaQuery(`(min-width: 600px)`);

  const colorConfig = getColorConfigFromPalette(colorPalette || '');
  const imageStyle = imageStyleBoolean ? 'partial' : 'full';
  const heroSize =
    heroSizeBoolean === null || heroSizeBoolean === true ? 'full_screen' : 'fixed_height';
  const backgroundImage = useMemo(() => {
    if (medScreen && image) {
      return `${image.url}?w=${imageStyle === 'partial' ? 767 * 2 : layout.containerWidth * 2}`;
    } else if (mobileImage) {
      return `${mobileImage.url}?w=${
        imageStyle === 'partial' ? 767 * 2 : layout.containerWidth * 2
      }`;
    }
  }, [image, mobileImage, medScreen, imageStyle, layout.containerWidth]);
  const classes = useStyles();
  const inspectorMode = useContentfulInspectorMode({ entryId: id });

  return (
    <Container
      maxWidth={false}
      className={clsx(classes.root, heroSize === 'full_screen' ? classes.fullScreen : null)}
      {...inspectorMode({ fieldId: 'image' })}
      style={{
        backgroundImage:
          imageStyle === 'full' && backgroundImage ? `url(${backgroundImage!})` : undefined,
        backgroundColor: colorConfig.backgroundColor,
      }}
    >
      {imageStyle === 'partial' && backgroundImage && (
        <div className={classes.partialBgContainer}>
          <div
            className={classes.partialBg}
            style={{
              backgroundImage: `url(${backgroundImage!})`,
            }}
          />
        </div>
      )}
      <div className={classes.innerContainer}>
        {headline && (
          <Typography
            variant="h1"
            className={classes.headline}
            style={{ color: colorConfig.headlineColor }}
            {...inspectorMode({ fieldId: 'headline' })}
          >
            {headline}
          </Typography>
        )}
        {greetings && (
          <Typography
            variant="h1"
            className={`${classes.headline} ${classes.greetings}`}
            style={{ color: colorConfig.highlightColor }}
            {...inspectorMode({ fieldId: 'headline' })}
          >
            {greetings}
          </Typography>
        )}
        {bodyText && (
          <LayoutContext.Provider value={{ ...defaultLayout, parent: 'hero-banner-body' }}>
            <div
              style={{ color: colorConfig.textColor }}
              {...inspectorMode({ fieldId: 'bodyText' })}
            >
              <CtfRichtext {...bodyText} className={classes.body} />
            </div>
          </LayoutContext.Provider>
        )}
        {targetPage && ctaText && (
          <div className={classes.ctaContainer}>
            <PageLink
              page={targetPage}
              variant="contained"
              color={colorConfig.buttonColor}
              isButton
            >
              {ctaText}
            </PageLink>
          </div>
        )}

        <div className={classes.body}>
          <a className={classes.contact} href="#contacts">
            Contact Us
          </a>
        </div>
      </div>
    </Container>
  );
};

import cn from 'classnames';
import { useElection } from 'contexts/election';
import { AnimatePresence, motion } from 'framer-motion';
import IconChevronLeft from 'icons/chevron-left.svg';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import React from 'react';
import Video from './video';

interface Props {
  inline?: boolean;
}

const ExplainerScreen: React.FC<Props> = ({ inline = false }) => {
  const { screen, questions, closeExplainer, explainer } = useElection();
  const { t } = useTranslation();
  const { back } = useRouter();

  const currentQuestion = questions.find((q) => q.id === explainer);

  return (
    <AnimatePresence>
      {screen === 'explainer' &&
        explainer !== null &&
        typeof currentQuestion !== 'undefined' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: inline ? 0 : 0.25 }}
            className={cn(
              inline ? 'pt-16' : 'fixed',
              'top-0 left-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-auto md:p-6 lg:p-10 bg-brand-primary'
            )}
          >
            <motion.div
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              exit={{ y: 40 }}
              className="p-4 my-auto bg-white shadow-xl md:p-6 rounded-xl"
            >
              <button
                onClick={() => {
                  closeExplainer();
                  back();
                }}
                className="flex items-center px-6 py-3 mb-3 font-medium leading-none rounded md:mb-6 bg-brand-primary bg-opacity-10 focus-default hover:bg-opacity-20"
              >
                <IconChevronLeft className="w-3 h-3 mr-2" />
                {t('election:back')}
              </button>
              <div className="lg:flex">
                {currentQuestion.video_url && (
                  <>
                    {inline ? (
                      <div className="max-w-[350px] mx-auto rounded overflow-hidden">
                        <Video inline src={currentQuestion.video_url} />
                      </div>
                    ) : (
                      <Video src={currentQuestion.video_url} />
                    )}
                  </>
                )}
                {currentQuestion.explainer_text && (
                  <div className="mt-6 lg:mt-0 lg:max-w-[450px] lg:w-screen prose lg:overflow-auto lg:max-h-[60vh] lg:overflow-scroll">
                    <div className="lg:mis-2">
                      {currentQuestion.explainer_text}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
    </AnimatePresence>
  );
};

export default ExplainerScreen;

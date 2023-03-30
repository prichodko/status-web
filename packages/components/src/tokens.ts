import { createTokens } from '@tamagui/core'
import { radius, size, space, zIndex } from '@tamagui/theme-base'

export const tokens = createTokens({
  color: {
    'neutral-5': 'hsla(220, 18%, 97%, 1)',
    'neutral-10': 'hsla(216, 20%, 95%, 1)',
    'neutral-20': 'hsla(214, 17%, 92%, 1)',
    'neutral-30': 'hsla(213, 15%, 88%, 1)',
    'neutral-40': 'hsla(219, 17%, 69%, 1)',
    'neutral-50': 'hsla(218, 14%, 45%, 1)',
    'neutral-60': 'hsla(219, 28%, 26%, 1)',
    'neutral-70': 'hsla(219, 35%, 19%, 1)',
    'neutral-80': 'hsla(219, 38%, 17%, 1)',
    'neutral-90': 'hsla(219, 42%, 13%, 1)',
    'neutral-95': 'hsla(218, 48%, 10%, 1)',
    'neutral-100': 'hsla(218, 51%, 7%, 1)',
    'neutral-5-opa-70': 'hsla(220, 18%, 97%, 0.7)',
    'neutral-90-opa-70': 'hsla(219, 42%, 13%, 0.7)',
    'neutral-95-opa-70': 'hsla(218, 48%, 10%, 0.7)',
    'neutral-80-opa-5': 'hsla(219, 38%, 17%, 0.05)',
    'neutral-80-opa-10': 'hsla(219, 38%, 17%, 0.1)',
    'neutral-80-opa-20': 'hsla(219, 38%, 17%, 0.2)',
    'neutral-80-opa-30': 'hsla(219, 38%, 17%, 0.3)',
    'neutral-80-opa-40': 'hsla(219, 38%, 17%, 0.4)',
    'neutral-80-opa-50': 'hsla(219, 38%, 17%, 0.5)',
    'neutral-80-opa-60': 'hsla(219, 38%, 17%, 0.6)',
    'neutral-80-opa-70': 'hsla(219, 38%, 17%, 0.7)',
    'neutral-80-opa-80': 'hsla(219, 38%, 17%, 0.8)',
    'neutral-80-opa-90': 'hsla(219, 38%, 17%, 0.9)',
    'neutral-80-opa-95': 'hsla(219, 38%, 17%, 0.95)',
    'neutral-80-opa-100': 'hsla(219, 38%, 17%, 1)',
    'white-5': 'hsla(0, 0%, 100%, 0.05)',
    'white-10': 'hsla(0, 0%, 100%, 0.1)',
    'white-20': 'hsla(0, 0%, 100%, 0.2)',
    'white-30': 'hsla(0, 0%, 100%, 0.3)',
    'white-40': 'hsla(0, 0%, 100%, 0.4)',
    'white-50': 'hsla(0, 0%, 100%, 0.5)',
    'white-60': 'hsla(0, 0%, 100%, 0.6)',
    'white-70': 'hsla(0, 0%, 100%, 0.7)',
    'white-80': 'hsla(0, 0%, 100%, 0.8)',
    'white-90': 'hsla(0, 0%, 100%, 0.9)',
    'white-95': 'hsla(0, 0%, 100%, 0.95)',
    'white-100': 'hsla(0, 0%, 100%, 1)',
    'primary-50': 'hsla(229, 71%, 57%, 1)',
    'primary-60': 'hsla(229, 54%, 45%, 1)',
    'primary-50-opa-5': 'hsla(229, 71%, 57%, 0.05)',
    'primary-50-opa-10': 'hsla(229, 71%, 57%, 0.1)',
    'primary-50-opa-20': 'hsla(229, 71%, 57%, 0.2)',
    'primary-50-opa-30': 'hsla(229, 71%, 57%, 0.3)',
    'primary-50-opa-40': 'hsla(229, 71%, 57%, 0.4)',
    'success-50': 'hsla(174, 63%, 40%, 1)',
    'success-60': 'hsla(174, 63%, 34%, 1)',
    'success-50-opa-5': 'hsla(174, 63%, 40%, 0.05)',
    'success-50-opa-10': 'hsla(174, 63%, 40%, 0.1)',
    'success-50-opa-20': 'hsla(174, 63%, 40%, 0.2)',
    'success-50-opa-30': 'hsla(174, 63%, 40%, 0.3)',
    'success-50-opa-40': 'hsla(174, 63%, 40%, 0.4)',
    'danger-50': 'hsla(355, 77%, 62%, 1)',
    'danger-60': 'hsla(355, 47%, 50%, 1)',
    'danger-50-opa-5': 'hsla(355, 77%, 62%, 0.05)',
    'danger-50-opa-10': 'hsla(355, 77%, 62%, 0.1)',
    'danger-50-opa-20': 'hsla(355, 77%, 62%, 0.2)',
    'danger-50-opa-30': 'hsla(355, 77%, 62%, 0.3)',
    'danger-50-opa-40': 'hsla(355, 77%, 62%, 0.4)',
    'purple-50': 'hsla(263, 44%, 57%, 1)',
    'purple-60': 'hsla(260, 33%, 41%, 1)',
    'purple-50-opa-5': 'hsla(263, 44%, 57%, 0.05)',
    'purple-50-opa-10': 'hsla(263, 44%, 57%, 0.1)',
    'purple-50-opa-20': 'hsla(263, 44%, 57%, 0.2)',
    'purple-50-opa-30': 'hsla(263, 44%, 57%, 0.3)',
    'purple-50-opa-40': 'hsla(263, 44%, 57%, 0.4)',
    'indigo-50': 'hsla(217, 30%, 41%, 1)',
    'indigo-60': 'hsla(217, 31%, 35%, 1)',
    'indigo-50-opa-5': 'hsla(217, 30%, 41%, 0.05)',
    'indigo-50-opa-10': 'hsla(217, 30%, 41%, 0.1)',
    'indigo-50-opa-20': 'hsla(217, 30%, 41%, 0.2)',
    'indigo-50-opa-30': 'hsla(217, 30%, 41%, 0.3)',
    'indigo-50-opa-40': 'hsla(217, 30%, 41%, 0.4)',
    'turquoise-50': 'hsla(193, 41%, 45%, 1)',
    'turquoise-60': 'hsla(193, 41%, 38%, 1)',
    'turquoise-50-opa-5': 'hsla(193, 41%, 45%, 0.05)',
    'turquoise-50-opa-10': 'hsla(193, 41%, 45%, 0.1)',
    'turquoise-50-opa-20': 'hsla(193, 41%, 45%, 0.2)',
    'turquoise-50-opa-30': 'hsla(193, 41%, 45%, 0.3)',
    'turquoise-50-opa-40': 'hsla(193, 41%, 45%, 0.4)',
    'blue-50': 'hsla(202, 84%, 62%, 1)',
    'blue-60': 'hsla(202, 56%, 52%, 1)',
    'blue-50-opa-5': 'hsla(202, 84%, 62%, 0.05)',
    'blue-50-opa-10': 'hsla(202, 84%, 62%, 0.1)',
    'blue-50-opa-20': 'hsla(202, 84%, 62%, 0.2)',
    'blue-50-opa-30': 'hsla(202, 84%, 62%, 0.3)',
    'blue-50-opa-40': 'hsla(202, 84%, 62%, 0.4)',
    'green-50': 'hsla(151, 53%, 58%, 1)',
    'green-60': 'hsla(151, 38%, 48%, 1)',
    'green-50-opa-5': 'hsla(151, 53%, 58%, 0.05)',
    'green-50-opa-10': 'hsla(151, 53%, 58%, 0.1)',
    'green-50-opa-20': 'hsla(151, 53%, 58%, 0.2)',
    'green-50-opa-30': 'hsla(151, 53%, 58%, 0.3)',
    'green-50-opa-40': 'hsla(151, 53%, 58%, 0.4)',
    'yellow-50': 'hsla(42, 100%, 66%, 1)',
    'yellow-60': 'hsla(42, 64%, 56%, 1)',
    'yellow-50-opa-5': 'hsla(42, 100%, 66%, 0.05)',
    'yellow-50-opa-10': 'hsla(42, 100%, 66%, 0.1)',
    'yellow-50-opa-20': 'hsla(42, 100%, 66%, 0.2)',
    'yellow-50-opa-30': 'hsla(42, 100%, 66%, 0.3)',
    'yellow-50-opa-40': 'hsla(42, 100%, 66%, 0.4)',
    'orange-50': 'hsla(18, 95%, 68%, 1)',
    'orange-60': 'hsla(18, 60%, 57%, 1)',
    'orange-50-opa-5': 'hsla(18, 95%, 68%, 0.05)',
    'orange-50-opa-10': 'hsla(18, 95%, 68%, 0.1)',
    'orange-50-opa-20': 'hsla(18, 95%, 68%, 0.2)',
    'orange-50-opa-30': 'hsla(18, 95%, 68%, 0.3)',
    'orange-50-opa-40': 'hsla(18, 95%, 68%, 0.4)',
    'red-50': 'hsla(0, 87%, 68%, 1)',
    'red-60': 'hsla(0, 54%, 57%, 1)',
    'red-50-opa-5': 'hsla(0, 87%, 68%, 0.05)',
    'red-50-opa-10': 'hsla(0, 87%, 68%, 0.1)',
    'red-50-opa-20': 'hsla(0, 87%, 68%, 0.2)',
    'red-50-opa-30': 'hsla(0, 87%, 68%, 0.3)',
    'red-50-opa-40': 'hsla(0, 87%, 68%, 0.4)',
    'pink-50': 'hsla(338, 96%, 74%, 1)',
    'pink-60': 'hsla(337, 56%, 62%, 1)',
    'pink-50-opa-5': 'hsla(338, 96%, 74%, 0.05)',
    'pink-50-opa-10': 'hsla(338, 96%, 74%, 0.1)',
    'pink-50-opa-20': 'hsla(338, 96%, 74%, 0.2)',
    'pink-50-opa-30': 'hsla(338, 96%, 74%, 0.3)',
    'pink-50-opa-40': 'hsla(338, 96%, 74%, 0.4)',
    'brown-50': 'hsla(15, 33%, 45%, 1)',
    'brown-60': 'hsla(15, 33%, 38%, 1)',
    'brown-50-opa-5': 'hsla(15, 33%, 45%, 0.05)',
    'brown-50-opa-10': 'hsla(15, 33%, 45%, 0.1)',
    'brown-50-opa-20': 'hsla(15, 33%, 45%, 0.2)',
    'brown-50-opa-30': 'hsla(15, 33%, 45%, 0.3)',
    'brown-50-opa-40': 'hsla(15, 33%, 45%, 0.4)',
    'beige-50': 'hsla(29, 34%, 68%, 1)',
    'beige-60': 'hsla(29, 21%, 58%, 1)',
    'beige-50-opa-5': 'hsla(29, 34%, 68%, 0.05)',
    'beige-50-opa-10': 'hsla(29, 34%, 68%, 0.1)',
    'beige-50-opa-20': 'hsla(29, 34%, 68%, 0.2)',
    'beige-50-opa-30': 'hsla(29, 34%, 68%, 0.3)',
    'beige-50-opa-40': 'hsla(29, 34%, 68%, 0.4)',
    'identifier-1': 'hsla(0, 0%, 0%, 1)',
    'identifier-2': 'hsla(120, 100%, 50%, 1)',
    'identifier-3': 'hsla(60, 100%, 50%, 1)',
    'identifier-4': 'hsla(0, 100%, 50%, 1)',
    'identifier-5': 'hsla(300, 100%, 50%, 1)',
    'identifier-6': 'hsla(240, 100%, 50%, 1)',
    'identifier-7': 'hsla(180, 100%, 50%, 1)',
    'identifier-8': 'hsla(0, 1%, 44%, 1)',
    'identifier-9': 'hsla(120, 100%, 30%, 1)',
    'identifier-10': 'hsla(61, 100%, 34%, 1)',
    'identifier-11': 'hsla(0, 100%, 30%, 1)',
    'identifier-12': 'hsla(300, 100%, 28%, 1)',
    'identifier-13': 'hsla(240, 100%, 26%, 1)',
    'identifier-14': 'hsla(186, 100%, 29%, 1)',
    'identifier-15': 'hsla(0, 0%, 77%, 1)',
    'identifier-16': 'hsla(123, 100%, 86%, 1)',
    'identifier-17': 'hsla(60, 100%, 85%, 1)',
    'identifier-18': 'hsla(0, 100%, 81%, 1)',
    'identifier-19': 'hsla(300, 100%, 85%, 1)',
    'identifier-20': 'hsla(252, 100%, 75%, 1)',
    'identifier-21': 'hsla(180, 100%, 88%, 1)',
    'identifier-22': 'hsla(0, 0%, 91%, 1)',
    'identifier-23': 'hsla(45, 100%, 54%, 1)',
    'identifier-24': 'hsla(11, 100%, 60%, 1)',
    'identifier-25': 'hsla(324, 100%, 50%, 1)',
    'identifier-26': 'hsla(277, 100%, 50%, 1)',
    'identifier-27': 'hsla(204, 94%, 61%, 1)',
    'identifier-28': 'hsla(165, 100%, 47%, 1)',
    'identifier-29': 'hsla(0, 0%, 100%, 1)',
    'identifier-30': 'hsla(12, 38%, 45%, 1)',
    'identifier-31': 'hsla(324, 100%, 39%, 1)',
    'identifier-32': 'hsla(40, 100%, 30%, 1)',
    ethereum: 'hsla(227, 75%, 69%, 1)',
    optimism: 'hsla(0, 72%, 67%, 1)',
    arbitrum: 'hsla(192, 82%, 68%, 1)',
    zksync: 'hsla(239, 98%, 81%, 1)',
    hermez: 'hsla(15, 77%, 65%, 1)',
    xdai: 'hsla(179, 51%, 50%, 1)',
    polygon: 'hsla(268, 84%, 70%, 1)',
    unknown: 'hsla(206, 26%, 95%, 1)',
  },
  size,
  space,
  zIndex,
  radius,
})

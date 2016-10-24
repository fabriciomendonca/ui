import React from 'react'
import CenteredForm from '../CenteredForm'
import SingleInputPrompt from '../SingleInputPrompt'
import DemoIcon from './DemoIcon'
import { TEMPLATE } from '../../Showroom/variationTypes'

export default {
  title: 'Prompts',

  variations: [
    {
      title: 'SingleInputPrompt',
      require: 'import SingleInputPrompt from \'@klarna/ui/templates/SingleInputPrompt\'',
      type: TEMPLATE,

      examples: {
        Regular: {
          inline: <SingleInputPrompt
            focus
            illustration={<DemoIcon />}
            title='Welcome to the site'
            summary='What is your name fellow traveler?'
            accept='Continue'
            legal='Chia williamsburg subway tile vaporware, live-edge kinfolk cardigan prism deep v retro seitan.'
            label='Name'
            onChange={(e) => console.log(e.target.value)}
            onAccept={() => console.log('accept')}
            value='Penelope Clearwater'
          />
        },

        Uncontrolled: {
          inline: <SingleInputPrompt
            illustration={<DemoIcon />}
            title='Welcome to the site'
            summary='What is your name fellow traveler?'
            accept='Continue'
            legal='Chia williamsburg subway tile vaporware, live-edge kinfolk cardigan prism deep v retro seitan.'
            label='Name'
            onChange={(e) => console.log(e.target.value)}
            onAccept={() => console.log('accept')}
            defaultValue='Percy Weasley'
          />
        },

        'With error': {
          inline: <SingleInputPrompt
            focus
            illustration={<DemoIcon />}
            title='Welcome to the site'
            summary='What is your name fellow traveler?'
            accept='Continue'
            error
            legal='Chia williamsburg subway tile vaporware, live-edge kinfolk cardigan prism deep v retro seitan.'
            label='Name'
            onChange={(e) => console.log(e.target.value)}
            onAccept={() => console.log('accept')}
            value='Ernest McMillan'
          />
        }
      }
    },

    {
      title: 'CenteredForm',
      require: 'import CenteredForm from \'@klarna/ui/templates/CenteredForm\'',
      type: TEMPLATE,

      examples: {
        Regular: {
          inline: <CenteredForm
            accept='Continue'
            cancel='I’d rather get a car'
            defaultValues={{
              brandName: 'ACME',
              wheels: '2'
            }}
            fields={[
              {
                label: 'Wheels',
                left: true,
                name: 'wheels',
                size: '1/5'
              },
              {
                label: 'Color',
                center: true,
                name: 'color',
                size: '1/5'
              },
              {
                label: 'Length',
                right: true,
                name: 'length',
                size: '3/5'
              },
              {
                label: 'Brand name',
                name: 'brandName'
              }
            ]}
            onAccept={() => console.log('accepted')}
            onCancel={() => console.log('canceled')}
            fieldType='input'
            illustration={<DemoIcon />}
            summary='Paleo lo-fi pork belly, venmo activated charcoal franzen swag four dollar toast scenester pok pok thundercats twee plaid.'
            title='Describe your favorite bike'
          />
        }
      }
    }
  ]
}
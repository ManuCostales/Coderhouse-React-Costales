import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import './MobileMenu.scss'

const MobileMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className="burger" onClick={() => setOpen(true)}>
        ☰
      </button>

      <Transition show={open} as={Fragment}>
        <Dialog onClose={() => setOpen(false)} className="dialog-root">
          <div className="panel-wrapper">
            <Transition.Child
              as={Fragment}
              enter="enter"
              enterFrom="from"
              enterTo="to"
              leave="leave"
              leaveFrom="to"
              leaveTo="from"
            >
              <Dialog.Panel className="panel">
                <button className="close" onClick={() => setOpen(false)}>✕</button>

                <nav className="menu">
                  <a className="link-light font-upper-spacing" href="/">Home</a>
                  <a className="link-light font-upper-spacing" href="/work">Mis trabajos</a>
                  <a className="link-light font-upper-spacing" href="/about">Acerca de mí</a>
                </nav>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default MobileMenu

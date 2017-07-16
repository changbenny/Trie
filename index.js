class TrieNode {
  constructor(children, val) {
    this.children = children
    this.val = val
  }
  find(char) {
    for (let i = 0; i < this.children.length; i ++) {
      if (this.children[i].val === char) {
        return this.children[i]
      }
    }
    return null
  }
  child(node) {
    this.children.push(node)
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode([], null)
  }

  insert(string) {
    let current = this.root
    for (let i = 0; i < string.length; i ++) {
      let char = string[i]
      let node = current.find(char)
      if (node) {
        current = node
      } else {
        let newNode = new TrieNode([], char)
        current.child(newNode)
        current = newNode
      }
    }
    return this.root
  }

  search(string) {
    let current = this.root
    for (let i = 0; i < string.length; i ++) {
      let char = string[i]
      let node = current.find(char)
      if (node) {
        current = node
        if (i === string.length - 1) {
          return true
        }
      } else {
        return false
      }
    }
    return false
  }

  prefix(string) {

  }
}


let trie = new Trie()

trie.insert('r')
trie.insert('string')


console.log(trie.search('r'))
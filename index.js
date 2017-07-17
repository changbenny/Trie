const END_SYMBOL = '$'
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
    let appendedString = `${string}${END_SYMBOL}`
    let current = this.root
    for (let i = 0; i < appendedString.length; i ++) {
      let char = appendedString[i]
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
    let appendedString = `${string}${END_SYMBOL}`
    let current = this.root
    for (let i = 0; i < appendedString.length; i ++) {
      let char = appendedString[i]
      let node = current.find(char)
      if (node) {
        current = node
        if (i === appendedString.length - 1) {
          return true
        }
      } else {
        return false
      }
    }
    return false
  }

  prefix(string) {
    let appendedString = `${string}`
    let current = this.root
    let combination = []
    for (let i = 0; i < appendedString.length; i ++) {
      let char = appendedString[i]
      let node = current.find(char)
      if (node) {
        current = node
      } else {
        return false
      }
    }
    this.bfsTraversal(current, '', function(accumulate) {
      combination.push(`${string}${accumulate}`)
    })
    return combination
  }

  bfsTraversal(root, accumulate = '', callback) {
    for (let i = 0; i < root.children.length; i ++) {
      let node = root.children[i]
      if (node.val === END_SYMBOL) {
        callback(accumulate)
        continue
      }
      this.bfsTraversal(node, `${accumulate}${node.val}`, callback)
    }
  }
}


let trie = new Trie()

trie.insert('roo')
trie.insert('string')
trie.insert('strstr')
trie.insert('strp')

console.log(trie.prefix('str'))
